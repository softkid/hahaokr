import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // 기본 빌드 출력 디렉토리
    assetsDir: 'assets',
    emptyOutDir: true,
  },
  base: '/', // 루트 경로 배포
})
