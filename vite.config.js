import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compress from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    compress({
      // Only compress assets larger than 1 KB
      threshold: 1024,
      ext: [".js", ".css", ".html", ".svg", ".jpeg", ".jpg", ".png", ".gif"],
      deleteOriginFile: true, // Optionally delete the original uncompressed files
    }),
  ],
  server: {
    fs: {
      strict: false, // Disable strict file system checking for local development
    },
    port: 3000, // Change the port if needed
    open: true, // Automatically open the app in the browser
  },
  build: {
    chunkSizeWarningLimit: 1000, // Limit for chunk size warnings
    cssCodeSplit: true, // Enable CSS code splitting
    minify: "terser", // Use Terser for minification
    assetsInlineLimit: 4096, // Increase inline limit for smaller assets (in bytes)
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[hash][ext]",
        chunkFileNames: "chunks/[name].[hash].js", // Organize chunk files
        entryFileNames: "assets/[name].[hash].js", // Organize entry files
        manualChunks(id) {
          // Split vendor libraries into separate chunks
          if (id.includes("node_modules")) {
            return id.toString().split("node_modules/")[1].split("/")[0];
          }
        },
      },
    },
  },
});
