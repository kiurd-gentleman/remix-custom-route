
import { getRoutes } from "./customRoutes.js";
export async function customRoute(routesDir: string, defineRoutes: any) {
    console.log("Discovered Routes:", routesDir, defineRoutes);
    const routes = await getRoutes(routesDir);

    return defineRoutes((route: any) => {
        routes.forEach(({ path, file }) => {
            route(path, `./${file}`);
        });
    });
}


