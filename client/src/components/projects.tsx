import { useQuery } from "@tanstack/react-query";
import { ArrowRight, ExternalLink, Github, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import ProjectModal from "./project-modal";
import AllProjectsModal from "./all-projects-modal";
import { initializeSocket } from "@/lib/queryClient";
import type { Project } from "@shared/schema";

const techColorMap: Record<string, string> = {
  "React": "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
  "Node.js": "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
  "MongoDB": "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
  "React Native": "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300",
  "Firebase": "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300",
  "TypeScript": "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
  "Vue.js": "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300",
  "D3.js": "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
  "Python": "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300",
  "Next.js": "bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300",
  "GraphQL": "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300",
  "PostgreSQL": "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300",
  "Angular": "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300",
  "Express": "bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300",
  "Socket.io": "bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300",
  "Flutter": "bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300",
  "Dart": "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300",
  "SQLite": "bg-stone-100 dark:bg-stone-700/50 text-stone-700 dark:text-stone-300",
};

function ProjectCard({ project, index, onViewProject }: { 
  project: Project; 
  index: number; 
  onViewProject: (project: Project) => void;
}) {
  return (
    <Card className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl dark:hover:shadow-portfolio-primary/10 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 dark:border-gray-700 animate-in fade-in-50 slide-in-from-bottom-4 duration-1000"
          style={{ animationDelay: `${index * 100}ms` }}>
      <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          data-testid={`img-project-${project.id}`}
        />
        <div className="absolute inset-0 bg-portfolio-primary/0 group-hover:bg-portfolio-primary/20 dark:group-hover:bg-portfolio-primary/30 transition-colors duration-500"></div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-portfolio-primary dark:group-hover:text-portfolio-primary transition-colors duration-300" data-testid={`title-project-${project.id}`}>
          {project.title}
        </h3>
        <p className="text-portfolio-neutral dark:text-gray-300 mb-4 leading-relaxed" data-testid={`description-project-${project.id}`}>
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <Badge 
              key={techIndex} 
              variant="secondary" 
              className={`${techColorMap[tech] || "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"} font-medium hover:scale-105 transition-transform duration-200`}
              data-testid={`tech-${project.id}-${techIndex}`}
            >
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <Button
            variant="ghost"
            onClick={() => onViewProject(project)}
            className="text-portfolio-primary hover:text-portfolio-secondary dark:text-portfolio-primary dark:hover:text-portfolio-secondary font-semibold p-0 h-auto justify-start"
            data-testid={`button-view-project-${project.id}`}
          >
            <Eye className="mr-2 h-4 w-4" />
            Ver Projeto #{project.id}
          </Button>
          <div className="flex space-x-3">
            {project.liveUrl && (
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="text-portfolio-neutral dark:text-gray-400 hover:text-portfolio-primary dark:hover:text-portfolio-primary p-2 h-8 w-8"
                data-testid={`link-live-${project.id}`}
              >
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="text-portfolio-neutral dark:text-gray-400 hover:text-portfolio-primary dark:hover:text-portfolio-primary p-2 h-8 w-8"
                data-testid={`link-github-${project.id}`}
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ProjectSkeleton() {
  return (
    <Card className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
      <Skeleton className="h-48 w-full" />
      <CardContent className="p-6">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mb-4" />
        <div className="flex gap-2 mb-4">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-18" />
        </div>
        <div className="flex justify-between items-center">
          <Skeleton className="h-5 w-24" />
          <div className="flex space-x-3">
            <Skeleton className="h-5 w-5" />
            <Skeleton className="h-5 w-5" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Projects() {
  const { data: projects, isLoading, error } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Initialize Socket.IO for real-time updates
  useEffect(() => {
    initializeSocket();
  }, []);

  const handleViewProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProjectModal = () => {
    setSelectedProject(null);
  };

  const handleShowAllProjects = () => {
    setShowAllProjects(true);
  };

  const handleCloseAllProjects = () => {
    setShowAllProjects(false);
  };

  const handleViewProjectFromAll = (project: Project) => {
    setShowAllProjects(false);
    setSelectedProject(project);
  };

  // Show only first 3 projects on main page
  const displayedProjects = projects?.slice(0, 3) || [];

  if (error) {
    return (
      <section id="projetos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-red-600" data-testid="error-projects">
            Erro ao carregar projetos. Tente novamente mais tarde.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="projetos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gradient-to-b dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 relative overflow-hidden transition-colors duration-500">
      {/* Subtle green background elements */}
      <div className="absolute inset-0 opacity-0 dark:opacity-10 bg-gradient-to-bl from-portfolio-accent/5 via-transparent to-portfolio-accent/3 pointer-events-none"></div>
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-portfolio-accent/5 rounded-full blur-3xl opacity-0 dark:opacity-25 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-in fade-in-50 slide-in-from-bottom-4 duration-1000" data-testid="projects-title">
            Meus Projetos
          </h2>
          <p className="text-xl text-portfolio-neutral dark:text-gray-300 max-w-2xl mx-auto animate-in fade-in-50 slide-in-from-bottom-4 duration-1000 delay-200" data-testid="projects-description">
            Aqui estão alguns dos meus projetos, mesmo usando a IA para criar, acabo aprendendo muito com isso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="projects-grid">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <ProjectSkeleton key={index} />
            ))
          ) : (
            displayedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} onViewProject={handleViewProject} />
            ))
          )}
        </div>

        {projects && projects.length > 3 && (
          <div className="text-center mt-12 animate-in fade-in-50 slide-in-from-bottom-4 duration-1000 delay-500">
            <Button 
              onClick={handleShowAllProjects}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-portfolio-primary via-portfolio-secondary to-portfolio-accent text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-portfolio-primary/25 transition-all duration-300 transform hover:scale-105"
              data-testid="button-view-all-projects"
            >
              Ver Todos os Projetos ({projects.length})
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        )}

        {/* Modals */}
        <ProjectModal 
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={handleCloseProjectModal}
        />
        
        <AllProjectsModal 
          projects={projects || []}
          isOpen={showAllProjects}
          onClose={handleCloseAllProjects}
          onViewProject={handleViewProjectFromAll}
        />
      </div>
    </section>
  );
}
