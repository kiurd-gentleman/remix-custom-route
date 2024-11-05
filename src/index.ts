// src/index.ts
import { customRoutes } from './customRoutes';

export default function customRoutesPlugin(options: { routesDir: string }) {
    return {
        name: 'vite-custom-routes',
        async configResolved(config: any) {
            const routes = await customRoutes(options.routesDir);
            console.log("Generated routes:", routes);
            console.log("Vite config:", config);
        },
    };
}
