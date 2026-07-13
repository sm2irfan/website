import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/website/',
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // listen on the LAN, so `npm run dev` alone is enough
    port: 5173,
    strictPort: true, // fail loudly instead of drifting to another port
    // Trust tunnel hostnames (cloudflared / ngrok) so phone testing works.
    // Dev server only — never used in the production build.
    allowedHosts: ['.trycloudflare.com', '.ngrok-free.app', '.ngrok.io'],
  },
})
