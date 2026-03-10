import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path' // 1. Added this import
import { fileURLToPath } from 'url' // 2. Needed for __dirname in ESM

// 3. Manually define __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", "sans-serif"],
      },
      colors: {
        textPrimary: "#1F2937",
        textSecondary: "#6B7280",
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // This maps "@" to the "src" directory
      '@': path.resolve(__dirname, './src'),
    },
  },
})