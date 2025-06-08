import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import fs from "fs"

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(), tailwindcss()],
    server: {
        https: {
            key: fs.readFileSync('127.0.0.1+3-key.pem'),
            cert: fs.readFileSync('127.0.0.1+3.pem')
        },
    },
});
