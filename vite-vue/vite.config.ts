import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { legacyQiankun } from "vite-plugin-legacy-qiankun";
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy(),
    legacyQiankun({
      name: "vueApp",
      devSandbox: true,
    }),
  ],
  server: {
    port: 5176,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
