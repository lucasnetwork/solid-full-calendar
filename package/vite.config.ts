import solidPlugin from "vite-plugin-solid";

import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    solidPlugin({
      exclude: "node_modules",
    }),
    libInjectCss(),
    dts({ include: ["src"] }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      formats: ["es"],
    },

    minify: false,
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
      external: "solid-js",
    },
  },
});
