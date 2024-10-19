import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compress from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    compress({
      // Ensure 'exts' is defined as an array of strings
      exts: [
        ".bin",
        ".js",
        ".css",
        ".html",
        ".svg",
        ".jpeg",
        ".jpg",
        ".png",
        ".gif",
      ],
      // Optional: Set the threshold for compression
      threshold: 1024, // Minimum file size in bytes for compression
      // Optional: Uncomment if you want to delete original files after compression
      // deleteOriginFile: true,
    }),
  ],
  server: {
    fs: {
      strict: false,
    },
    port: 3000,
    open: true,
  },
  build: {
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    minify: "terser", // Ensure Terser is being used for minification
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[hash][ext]",
        chunkFileNames: "chunks/[name].[hash].js",
        entryFileNames: "assets/[name].[hash].js",
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id.toString().split("node_modules/")[1].split("/")[0];
          }
        },
      },
    },
  },
});
