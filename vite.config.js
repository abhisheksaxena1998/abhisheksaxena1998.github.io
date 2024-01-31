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
    }),
  ],
  build: {
    chunkSizeWarningLimit: 1000,
    minify: true,
    assetsInlineLimit: "1024",
    assetFileNames: "assets/[name].[hash][ext]",
  },
});
