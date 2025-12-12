import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'public', // Cloudflare Pages는 기본적으로 public 디렉토리를 빌드 출력으로 사용
    assetsDir: 'assets',
    emptyOutDir: true,
  },
  base: '/', // Cloudflare Pages 루트 경로 배포
})
