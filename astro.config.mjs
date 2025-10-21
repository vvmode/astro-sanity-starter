import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
// import tailwindcss from '@tailwindcss/vite';
// import sanity from '@sanity/astro';
// import { sanityConfig } from './src/utils/sanity-client';

// https://astro.build/config
export default defineConfig({
    integrations: [
        react()
    ],
    server: {
        port: 3000
    }
});
