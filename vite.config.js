import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://DocokNet.github.io/rkpo_lab4', // Замените на имя вашего репозитория
  build: {
    outDir: 'build', // Папка, в которую будет собираться проект
  }
})
