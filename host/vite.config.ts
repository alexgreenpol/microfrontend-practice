import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "host",
      remotes: {
        "remote-vue": "http://localhost:5001/assets/remoteEntry.js",
        "remote-react": "http://localhost:5002/assets/remoteEntry.js",
      },
      shared: ["vue"],
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
