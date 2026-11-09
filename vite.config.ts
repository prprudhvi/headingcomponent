import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Generates dist/index.d.ts (+ Heading.d.ts) from the library files only
    dts({
      tsconfigPath: './tsconfig.app.json',
      entryRoot: 'src',
      include: ['src/index.ts', 'src/Heading.tsx'],
      insertTypesEntry: true,
    }),
  ],
  build: {
    // Don't ship public/ (favicon etc. are only for the dev demo page)
    copyPublicDir: false,
    // Library mode: build src/index.ts instead of index.html
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: 'index', // -> dist/index.js (matches package.json "exports")
    },
    rolldownOptions: {
      // Leave React outside the bundle; the consuming app provides it
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },
})
