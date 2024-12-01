import { getRoutes } from "./customRoutes.js";
export async function customRoute(routesDir, defineRoutes) {
    console.log("Discovered Routes:", routesDir, defineRoutes);
    const routes = await getRoutes(routesDir);
    return defineRoutes((route) => {
        routes.forEach(({ path, file }) => {
            route(path, `./${file}`);
        });
    });
}
