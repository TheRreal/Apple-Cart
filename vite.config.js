import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: './index.html',
        },
    },
    server: {
        fs: {
            strict: true,
        },
    },

});

//  Vite is  like an assistant that watches your code files (HTML, SCSS, JavaScript) as you work. When you save changes, Vite  updates your website preview so you see the change immediately without waiting long.