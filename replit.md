# Replit.md

## Overview

This is a full-stack web application built with React (TypeScript) frontend and Express.js backend, following a monorepo structure. The application appears to be a portfolio website showcasing data analyst skills, with a modern tech stack including Tailwind CSS for styling, shadcn/ui for UI components, and Drizzle ORM for database operations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style)
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite with custom configuration for monorepo setup

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based sessions with connect-pg-simple
- **Development**: tsx for TypeScript execution in development

### Project Structure
- `client/` - React frontend application
- `server/` - Express.js backend API
- `shared/` - Shared TypeScript types and database schema
- `migrations/` - Database migration files (Drizzle)

## Key Components

### Frontend Components
- **Portfolio Sections**: Hero, About, Skills, Projects, Experience, Contact
- **UI Components**: Complete shadcn/ui component library implementation
- **Animation System**: Custom scroll-based animations and counter animations
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Backend Components
- **API Routes**: Health check and contact form endpoints
- **Database Layer**: User management with Drizzle ORM
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Development Server**: Vite integration for hot reloading

### Shared Components
- **Database Schema**: User table definition with Drizzle ORM
- **Type Safety**: Shared TypeScript types between frontend and backend

## Data Flow

1. **Frontend to Backend**: API calls using fetch with TanStack Query for caching and state management
2. **Database Operations**: Drizzle ORM handles all database interactions with type-safe queries
3. **Session Management**: PostgreSQL-based sessions for user authentication
4. **Development Workflow**: Vite serves frontend and proxies API calls to Express backend

## External Dependencies

### Core Technologies
- **Database**: Neon Database (serverless PostgreSQL)
- **UI Components**: Radix UI primitives via shadcn/ui
- **Icons**: Font Awesome and Lucide React
- **Fonts**: Google Fonts (Poppins, Inter)

### Development Tools
- **Build Tools**: Vite, esbuild for production builds
- **Development**: tsx for TypeScript execution, Replit-specific plugins
- **Database Tools**: Drizzle Kit for migrations and schema management

## Deployment Strategy

### Production Build
- **Frontend**: Vite builds static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Development**: NODE_ENV=development with Vite dev server
- **Production**: NODE_ENV=production with static file serving
- **Database**: DATABASE_URL environment variable required

### Scripts
- `dev`: Start development server with tsx
- `build`: Build both frontend and backend for production
- `start`: Run production server
- `check`: TypeScript type checking
- `db:push`: Apply database schema changes

The application uses a modern full-stack architecture with strong type safety throughout, efficient development workflow, and production-ready deployment strategy. The portfolio showcases data analytics skills with interactive components and professional presentation.