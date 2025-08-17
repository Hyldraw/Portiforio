import type { Express } from "express";
import { createServer, type Server } from "http";
import { Server as SocketIOServer } from "socket.io";
import { watch } from "fs";
import { join } from "path";
import { pathToFileURL } from "url";

let cachedProjects: any[] = [];

// Function to load projects dynamically
async function loadProjects() {
  try {
    const projectsPath = join(process.cwd(), "client/src/data/projects.ts");
    const projectsUrl = pathToFileURL(projectsPath).href + '?update=' + Date.now();
    
    // Dynamic import to load the module
    const module = await import(projectsUrl);
    const projects = module.projects || [];
    
    cachedProjects = projects.map((project: any, index: number) => ({
      id: index + 1,
      title: project.title,
      description: project.description,
      technologies: project.technologies,
      liveUrl: project.liveUrl || "",
      githubUrl: project.githubUrl || "",
      image: project.image || ""
    }));
    
    console.log(`✅ Loaded ${cachedProjects.length} projects successfully`);
    return cachedProjects;
  } catch (error) {
    console.error("Error loading projects:", error);
    // Return fallback data if file reading fails
    cachedProjects = [{
      id: 1,
      title: "Projeto de Exemplo",
      description: "Este é um projeto de exemplo enquanto carregamos seus dados.",
      technologies: ["JavaScript"],
      liveUrl: "",
      githubUrl: "",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    }];
    return cachedProjects;
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Load projects initially
  await loadProjects();

  // Get all projects from the simple data file
  app.get("/api/projects", async (req, res) => {
    try {
      const projects = await loadProjects();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch projects" });
    }
  });

  const httpServer = createServer(app);
  const io = new SocketIOServer(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

  // Watch for changes in projects.ts file
  const projectsPath = join(process.cwd(), "client/src/data/projects.ts");
  
  watch(projectsPath, (eventType) => {
    if (eventType === 'change') {
      console.log("📦 Projects file changed, reloading data...");
      
      // Wait a bit for file write to complete
      setTimeout(async () => {
        const updatedProjects = await loadProjects();
        
        // Emit update to all connected clients
        io.emit('projects-updated', updatedProjects);
        console.log("🚀 Projects updated and sent to clients");
      }, 100);
    }
  });

  io.on('connection', (socket) => {
    console.log('🔌 Client connected for real-time updates');
    
    socket.on('disconnect', () => {
      console.log('🔌 Client disconnected');
    });
  });

  return httpServer;
}
