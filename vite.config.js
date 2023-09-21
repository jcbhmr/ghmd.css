/// <reference types="histoire" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { HstVue } from "@histoire/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  histoire: {
    plugins: [HstVue()],
  },
});
