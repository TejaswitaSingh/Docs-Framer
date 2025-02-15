import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/Docs-Framer/", // Add your repo name here (case-sensitive)
});