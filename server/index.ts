// server/index.ts
import express, { Request, Response, NextFunction } from "express";
import path from "path";
import { fileURLToPath } from "url";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express(); // ✅ Initialize express

// ✅ Serve static files from public and Attached_Assets folders
app.use(express.static(path.join(__dirname, "../client/public")));
app.use(express.static(path.join(__dirname, "../Attached_Assets")));

// ✅ Middleware to parse incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ✅ Logging middleware for API routes
app.use((req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  const pathName = req.path;
  let capturedJsonResponse: any;

  const originalJson = res.json;
  res.json = function (body, ...args) {
    capturedJsonResponse = body;
    return originalJson.apply(res, [body, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (pathName.startsWith("/api")) {
      let logLine = `${req.method} ${pathName} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }
      log(logLine);
    }
  });

  next();
});

// ✅ Main async function
(async () => {
  const server = await registerRoutes(app);

  // ✅ Error handler
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });

  // ✅ Use Vite middleware or serve static based on environment
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ✅ Start server (Windows-compatible)
  const port = parseInt(process.env.PORT || "5000", 10);
  const host = "127.0.0.1";

  server.listen(port, host, () => {
    log(`🚀 Serving on http://${host}:${port}`);
  });
})();
