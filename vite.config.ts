import { defineConfig } from "vite";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: "autoUpdate",
  includeAssets: [],
  manifest: {
    short_name: "Press here",
    name: "Press here",
    icons: [
      {
        src: "images/icon-48x48.png",
        sizes: "48x48",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "images/icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "images/icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "images/icon-128x128.png",
        sizes: "128x128",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "images/icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "images/icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "images/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "images/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    start_url: "./",
    background_color: "#9acd32",
    display: "standalone",
    scope: "./",
    theme_color: "#9acd32",
    description: "All we need to do is here",
    orientation: "portrait-primary",
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.gltf'],
  base: "./",
  plugins: [react(), VitePWA(manifestForPlugin)],
});
