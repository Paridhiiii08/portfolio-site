import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "Portfolio API is running" });
  });

  // Contact form endpoint (for demonstration purposes)
  app.post("/api/contact", (req, res) => {
    const { name, email, subject, message } = req.body;
    
    // In a real application, you would:
    // 1. Validate the input
    // 2. Send an email
    // 3. Store in database
    // 4. Return appropriate response
    
    console.log("Contact form submission:", { name, email, subject, message });
    
    res.json({ 
      success: true, 
      message: "Thank you for your message! We'll get back to you soon." 
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
