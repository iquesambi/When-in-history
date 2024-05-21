import { defineConfig } from 'vite';
import vueJsxPlugin from '@vitejs/plugin-vue-jsx';
import vuePlugin from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        vueJsxPlugin(),
        vuePlugin(),      //for .vue files
    ],
    server: {
        port: 8080,
        host: true,
    },
    build: {
        sourcemap: true,
        minify: false
    }
});