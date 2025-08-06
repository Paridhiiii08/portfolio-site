"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
// server/index.ts
var express_1 = require("express");
var path_1 = require("path");
var url_1 = require("url");
var routes_js_1 = require("./routes.js"); // ✅ Add `.js` extension
// Fix __dirname for ES Modules
var __filename = (0, url_1.fileURLToPath)(import.meta.url);
var __dirname = path_1.default.dirname(__filename);
var app = (0, express_1.default)();
// ✅ Serve static files from public and Attached_Assets folders
app.use(express_1.default.static(path_1.default.join(__dirname, "../client/public")));
app.use(express_1.default.static(path_1.default.join(__dirname, "../Attached_Assets")));
// ✅ Middleware to parse incoming requests
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// ✅ Logging middleware for API routes
app.use(function (req, res, next) {
    var start = Date.now();
    var pathName = req.path;
    var capturedJsonResponse;
    var originalJson = res.json;
    res.json = function (body) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        capturedJsonResponse = body;
        return originalJson.apply(res, __spreadArray([body], args, true));
    };
    res.on("finish", function () {
        var duration = Date.now() - start;
        if (pathName.startsWith("/api")) {
            var logLine = "".concat(req.method, " ").concat(pathName, " ").concat(res.statusCode, " in ").concat(duration, "ms");
            if (capturedJsonResponse) {
                logLine += " :: ".concat(JSON.stringify(capturedJsonResponse));
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
await (0, routes_js_1.registerRoutes)(app);
// ✅ Error handler
app.use(function (err, _req, res, _next) {
    var status = err.status || err.statusCode || 500;
    var message = err.message || "Internal Server Error";
    res.status(status).json({ message: message });
    throw err;
});
// ✅ Production mode (for Vercel)
if (process.env.NODE_ENV === "production") {
    serveStatic(app);
}
// ❌ DO NOT start server with app.listen()
// ✅ Instead, export the handler
exports.default = app;
