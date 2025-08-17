# Replit.md

## Overview

This is a portfolio website application built as a full-stack TypeScript project showcasing a developer's work and projects. The application features a modern React frontend with a clean, responsive design and an Express.js backend API. The portfolio displays projects in an interactive grid layout with detailed information including technologies used, descriptions, and links to live demos and GitHub repositories.

## User Preferences

Preferred communication style: Simple, everyday language.
Preferred design style: Dark theme by default with green accent colors, modern interface with smooth animations
Contact preferences: Simple "Entre em Contato Comigo" instead of formal business language, no phone number, Instagram instead of LinkedIn/Twitter

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development patterns
- **Routing**: Wouter for lightweight client-side routing with minimal bundle size
- **Styling**: Tailwind CSS with custom CSS variables for consistent theming and responsive design
- **UI Components**: Radix UI primitives with shadcn/ui component library for accessible, customizable components
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript with ES modules for type safety and modern JavaScript features
- **Data Storage**: Simple file-based project data in `client/src/data/projects.ts` for easy management
- **API Design**: Single endpoint to serve project data with auto-generated IDs (1, 2, 3, etc.)
- **Project System**: ID-based system where first 3 projects display on main page, full list available via popup
- **Development**: Hot reload and development middleware integration with Vite

### Database Design
- **Schema**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Tables**: Users table with authentication fields and Projects table with portfolio data
- **Validation**: Zod schemas for runtime type validation and data integrity
- **Migration**: Drizzle Kit for database schema management and migrations

### Styling and Theming
- **Design System**: Comprehensive CSS custom properties for colors, typography, and spacing with dark/light theme support
- **Theme System**: Custom ThemeProvider with localStorage persistence and system preference detection, defaulting to dark mode
- **Component Variants**: Class Variance Authority for consistent component styling patterns with dark mode variants
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Accessibility**: Focus management and screen reader support throughout components
- **Animations**: Custom CSS animations including gradient-x, float, pulse-glow, and slide-in-blur effects for modern interactions

### Development Environment
- **Type Checking**: Strict TypeScript configuration with path mapping for clean imports
- **Code Quality**: Consistent formatting and linting setup for maintainable code
- **Build Process**: Separate client and server builds with optimized output for production
- **Development Tools**: Replit integration with cartographer and runtime error overlay

## External Dependencies

### Database
- **PostgreSQL**: Primary database using Neon Database serverless platform
- **Drizzle ORM**: Type-safe database toolkit with schema validation
- **Connection**: Environment-based database URL configuration

### UI and Styling
- **Radix UI**: Comprehensive set of low-level UI primitives for accessibility
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Lucide React**: Consistent icon library for user interface elements
- **Google Fonts**: External font loading for Inter, DM Sans, and other typography

### State and Data Management
- **TanStack Query**: Server state management with caching and synchronization
- **React Hook Form**: Form state management with validation resolvers
- **Wouter**: Lightweight routing library for single-page application navigation

### Development and Build Tools
- **Vite**: Fast build tool with development server and production optimization
- **ESBuild**: Fast JavaScript bundler for server-side code compilation
- **TypeScript**: Static type checking and modern JavaScript features
- **Replit Plugins**: Development environment integration for debugging and cartography