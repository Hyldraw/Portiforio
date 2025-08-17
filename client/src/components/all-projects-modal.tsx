import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Eye } from "lucide-react";
import type { Project } from "@shared/schema";

interface AllProjectsModalProps {
  projects: Project[];
  isOpen: boolean;
  onClose: () => void;
  onViewProject: (project: Project) => void;
}

export default function AllProjectsModal({ 
  projects, 
  isOpen, 
  onClose, 
  onViewProject 
}: AllProjectsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
            Todos os Projetos ({projects.length})
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-6 max-h-[70vh] overflow-y-auto pr-2">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-portfolio-primary/30 transition-colors duration-200"
              data-testid={`all-projects-card-${project.id}`}
            >
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Project Image */}
                {project.image && (
                  <div className="lg:w-48 h-32 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700 flex-shrink-0">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                      data-testid={`all-projects-image-${project.id}`}
                    />
                  </div>
                )}
                
                {/* Project Info */}
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      #{project.id} - {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="text-xs bg-portfolio-primary/5 border-portfolio-primary/20 text-portfolio-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => onViewProject(project)}
                      className="border-portfolio-primary/20 text-portfolio-primary hover:bg-portfolio-primary/10"
                      data-testid={`all-projects-view-${project.id}`}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      Ver Projeto
                    </Button>
                    
                    {project.liveUrl && (
                      <Button 
                        asChild
                        variant="outline" 
                        size="sm"
                        className="border-green-500/20 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20"
                        data-testid={`all-projects-demo-${project.id}`}
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Abrir
                        </a>
                      </Button>
                    )}
                    
                    {project.githubUrl && (
                      <Button 
                        asChild
                        variant="outline" 
                        size="sm"
                        className="border-gray-300 dark:border-gray-600"
                        data-testid={`all-projects-github-${project.id}`}
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-1" />
                          GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}