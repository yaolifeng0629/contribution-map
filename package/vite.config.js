import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import libCss from 'vite-plugin-libcss';
export default defineConfig({
    open: true,
    plugins: [vue(), libCss()],
    build: {
        outDir: 'dist/contribution-map',
        lib: {
            entry: path.resolve(__dirname, './src/components/index.js'),
            name: 'contribution-map',
            fileName: 'contribution-map',
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
});
