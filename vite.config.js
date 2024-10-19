import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compress from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    compress({
      exts: ["bin", "js", "css", "html", "svg", "jpeg", "jpg", "png", "gif"],
      threshold: 1024,
    }),
  ],
  build: {
    chunkSizeWarningLimit: 1000,
    minify: true,
    cssCodeSplit: true,
    assetsInlineLimit: "4096",
    assetFileNames: "assets/[name].[hash][ext]",
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
