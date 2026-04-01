import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          services: path.resolve(__dirname, 'services.html'),
          about: path.resolve(__dirname, 'about.html'),
          contact: path.resolve(__dirname, 'contact.html'),
          planner: path.resolve(__dirname, 'planner.html'),
          'service-detail': path.resolve(__dirname, 'service-detail.html'),
          'catering-service': path.resolve(__dirname, 'catering-service.html'),
          parties: path.resolve(__dirname, 'parties.html'),
          'get-together': path.resolve(__dirname, 'get-together.html'),
          wedding: path.resolve(__dirname, 'wedding.html'),
          functions: path.resolve(__dirname, 'functions.html'),
          bhandara: path.resolve(__dirname, 'bhandara.html'),
          music: path.resolve(__dirname, 'music.html'),
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
