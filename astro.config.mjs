// import { defineConfig } from "astro/config"
// import react from "@astrojs/react"
// import vercel from "@astrojs/vercel"

// // export default defineConfig({
// //   output: server,
// //   adapter: vercel({}),
// //   integrations: [react()],
// //   server: {
// //     host: true,
// //     allowedHosts: [
// //       'hokily-unsociological-henley.ngrok-free.dev', 
// //       '.ngrok-free.dev'
// //     ],
// //   },
// //   vite: {
// //     build: {
// //       cssCodeSplit: true,
// //       rollupOptions: {
// //         output: {
// //           manualChunks: {
// //             'react-vendor': ['react', 'react-dom']
// //           }
// //         }
// //       }
// //     }
// //   }
// // })

import { defineConfig } from "astro/config"
import react from "@astrojs/react"

export default defineConfig({
  output: "static",
  integrations: [react()],
  server: {
    host: true,
  },
  vite: {
    build: {
      cssCodeSplit: true,
      minify: 'esbuild',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'lucide': ['lucide-react', 'lucide-astro']
          }
        }
      }
    },
    ssr: {
      external: ['sharp']
    }
  }
})