
export interface ProjectData {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

export const projects: ProjectData[] = [
  {
    title: "FlyStream - Addon para Stremio",
    description: "Filmes e séries com carregamento rápido com o FlyStream, sem travamentos e com excelente qualidade de imagem e áudio. Experiência fluida para você assistir sem interrupções.",
    technologies: ["JavaScript"],
    liveUrl: "https://flystream.onrender.com/",
    githubUrl: "https://github.com/Hyldraw/FlyStream/tree/main",
    image: "https://i.imgur.com/hLl93U4.jpeg"
  }
];
