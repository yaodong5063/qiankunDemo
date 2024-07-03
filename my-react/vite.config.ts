import { defineConfig } from "vite";
import { legacyQiankun } from "vite-plugin-legacy-qiankun";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    legacyQiankun({
      name: "myReact",
      devSandbox: true,
    }),
  ],
  server: {
    port: 5179,
    origin: "http://localhost:5179",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
