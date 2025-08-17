import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, X } from "lucide-react";
import type { Project } from "@shared/schema";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white pr-8">
            {project.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Project Image */}
          {project.image && (
            <div className="w-full h-64 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
                data-testid={`project-modal-image-${project.id}`}
              />
            </div>
          )}
          
          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Sobre o Projeto
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>
          
          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Tecnologias Utilizadas
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="bg-portfolio-primary/10 text-portfolio-primary border-portfolio-primary/20"
                  data-testid={`project-modal-tech-${tech.toLowerCase()}`}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            {project.liveUrl && (
              <Button 
                asChild
                className="flex-1 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary hover:from-portfolio-secondary hover:to-portfolio-primary"
                data-testid={`project-modal-demo-${project.id}`}
              >
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Abrir
                </a>
              </Button>
            )}
            
            {project.githubUrl && (
              <Button 
                asChild
                variant="outline" 
                className="flex-1 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
                data-testid={`project-modal-github-${project.id}`}
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Ver no GitHub
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}