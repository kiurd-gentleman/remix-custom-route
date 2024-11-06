// src/index.ts
import { customRoutes } from './customRoutes.js';
export default function customRoutesPlugin(options) {
    return {
        name: 'remix-custom-routes',
        async configResolved(config) {
            const routes = await customRoutes(options.routesDir);
            console.log("Generated routes:", routes);
            console.log("Vite config:", config);
        },
    };
}
