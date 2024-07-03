import { defineConfig } from "vite";
import { legacyQiankun } from "vite-plugin-legacy-qiankun";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    legacyQiankun({
      name: "reactApp",
      devSandbox: true,
    }),
  ],
  server: {
    port: 5175,
    origin: "http://localhost:5175",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
