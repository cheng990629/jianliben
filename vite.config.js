import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // 避开本机常驻 3000(OneAPI)/3001；与导出服务默认 base_url 对齐
    port: 5173,
    strictPort: true,
  },
})
