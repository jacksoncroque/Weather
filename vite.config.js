import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': new URL("./src", import.meta.url).pathname,
      styles: new URL("./src/styles", import.meta.url).pathname,
    },
  },
});