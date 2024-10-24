import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import { viteStaticCopy } from 'vite-plugin-static-copy'; // Ensure this is imported

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/pdfjs-dist/build/pdf.worker.min.mjs',
          dest: 'pdfjs', // This directory should be served correctly
        },
      ],
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  optimizeDeps: {
    include: ['pdfjs-dist'],
  },
  server: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
});
