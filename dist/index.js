// src/index.ts
import { defineCustomRoutes } from './viteCustomRoutes';
export default function viteCustomRoutesPlugin(options) {
    return {
        name: 'vite-custom-routes',
        async configResolved(config) {
            const routes = await defineCustomRoutes(options.routesDir);
            console.log("Generated routes:", routes);
            console.log("Vite config:", config);
        },
    };
}
