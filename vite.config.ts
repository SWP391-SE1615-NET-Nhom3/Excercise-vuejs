import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import PackageJson from './package.json' with { type: 'json' }
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

process.env.VITE_APP_VERSION = PackageJson.version

export default defineConfig({
  plugins: [
    vue(),

    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
        {
          '@/store': ['useStore'],
          '@unhead/vue': ['useHead'],
        },
      ],
      dts: 'auto-imports.d.ts',
      vueTemplate: true,
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dts: 'components.d.ts',
      resolvers: [ElementPlusResolver()],
    }),
    tailwindcss(),
  ],
  server: {
    allowedHosts: ['ee-behavioral-scottish-somewhere.trycloudflare.com'],
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorMaxWorkers: true,
  },
})
