import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { generateSitemap } from "./src/utils/sitemap";
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
export default defineConfig({
    base: './',
    plugins: [
        react(),
        tailwindcss(),
        {
            name: 'sitemap-plugin',
            configureServer: function (server) {
                server.middlewares.use('/sitemap.xml', function (req, res) {
                    res.setHeader('Content-Type', 'application/xml');
                    res.end(generateSitemap());
                });
            },
        },
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
        },
    },
});
