// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import pages from './src/js/pages.config'

const pagesInput = {};

pages.forEach((page => {
    pagesInput[page.name] = page.path
}));

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                ...pagesInput
            },
            output: {
                assetFileNames: (assetInfo) => {
                    let extType = assetInfo.name.split('.').at(1);
                    if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                        extType = 'img';
                    } else if (/woff|woff2|eot|ttf/.test(extType)) {
                        extType = "fonts";
                    }
                    return `assets/${extType}/[name][extname]`;
                },
                chunkFileNames: 'assets/js/[name].js',
                entryFileNames: 'assets/js/[name].js',
            },
        },
    },
})