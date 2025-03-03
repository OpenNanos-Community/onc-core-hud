import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from '@tailwindcss/vite'
import {viteSingleFile} from "vite-plugin-singlefile";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(), viteSingleFile()],
  base: "./",
  build: {
    assetsDir: "src",
    minify: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});
