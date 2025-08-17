# Como Adicionar Novos Projetos

Para adicionar um novo projeto ao seu portfólio, siga estes passos simples:

## 1. Abra o arquivo de projetos
Vá até: `client/src/data/projects.ts`

## 2. Adicione seu projeto
No final do array `projects`, adicione um novo objeto seguindo este formato:

```typescript
{
  title: "Nome do Seu Projeto",
  description: "Descrição detalhada do que o projeto faz, suas funcionalidades principais e o problema que resolve.",
  technologies: ["React", "Node.js", "MongoDB"], // Tecnologias usadas
  liveUrl: "https://seusite.com", // Link para demonstração (opcional)
  githubUrl: "https://github.com/usuario/projeto", // Link do GitHub (opcional)
  image: "https://exemplo.com/imagem.jpg" // Imagem do projeto (opcional)
}
```

## 3. Salve o arquivo
O site será atualizado automaticamente!

## Exemplo Completo

```typescript
export const projects: ProjectData[] = [
  // ... projetos existentes ...
  
  // Seu novo projeto
  {
    title: "Meu App Incrível",
    description: "Um aplicativo que revoluciona a forma como as pessoas organizam suas tarefas diárias.",
    technologies: ["Vue.js", "Laravel", "MySQL"],
    liveUrl: "https://meuapp.com",
    githubUrl: "https://github.com/usuario/meu-app",
    image: "https://images.unsplash.com/photo-exemplo"
  }
];
```

## Dicas

- **Título**: Use um nome claro e atrativo
- **Descrição**: Explique o que o projeto faz e qual problema resolve
- **Tecnologias**: Liste as principais tecnologias usadas
- **URLs**: São opcionais, mas ajudam os visitantes a conhecer melhor seu trabalho
- **Imagem**: Use uma imagem que represente bem o projeto (screenshot, logo, etc.)

## Como funciona o sistema

- A página inicial mostra apenas os **3 primeiros projetos** da lista
- Cada projeto recebe um **ID automático** (1, 2, 3, etc.) baseado na posição
- Botão **"Ver Projeto #X"** abre popup com detalhes completos
- Botão **"Ver Todos os Projetos"** mostra lista completa em popup
- Links diretos para **GitHub** e **Demo** nos cartões e popups

## Para remover um projeto
Simplesmente delete o objeto correspondente do array `projects`.

É assim simples! 🚀