// src/index.ts
import { customRoutes } from './customRoutes.js';

export default function customRoutesPlugin(options: { routesDir: string }) {
    return {
        name: 'remix-custom-routes',
        async configResolved(config: any) {
            const routes = await customRoutes(options.routesDir);
            console.log("Generated routes:", routes);
            console.log("Vite config:", config);
        },
    };
}
