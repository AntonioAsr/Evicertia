import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {},
  },
  server: {
    port: 3000,
    https: false,
    host: '127.0.0.1',

  },
  test: {
    environment: "jsdom",
    globals: true,
  },
});
