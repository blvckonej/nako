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
        },
    },
})