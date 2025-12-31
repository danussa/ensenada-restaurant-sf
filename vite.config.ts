import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/ensenada-restaurant-sf/",
  plugins: [react()],
  build: {
    sourcemap: false
  }
});
