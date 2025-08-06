// server/index.ts
import express, { Request, Response, NextFunction } from "express";
import path from "path";
import { fileURLToPath } from "url";
import { registerRoutes } from "./routes.js"; // ✅ Add `.js` extension
import { setupVite, serveStatic, log } from "./vite";

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

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

// ✅ Apply routes
await registerRoutes(app);

// ✅ Error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
  throw err;
});

// ✅ Production mode (for Vercel)
if (process.env.NODE_ENV === "production") {
  serveStatic(app);
}

// ❌ DO NOT start server with app.listen()
// ✅ Instead, export the handler
export default app;
