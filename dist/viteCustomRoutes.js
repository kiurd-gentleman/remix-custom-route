// src/customRoutes.ts
import { promises as fs } from 'fs';
import path from 'path';
export async function defineCustomRoutes(dir, basePath = '') {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const routes = await Promise.all(entries.map(async (entry) => {
        const fullPath = path.join(dir, entry.name);
        const routePath = path
            .join(basePath, entry.name.replace(/\.tsx$/, "")
            .replace(/\/index$/, "/")
            .replace(/\[\.{3}(.+)\]/, "*:$1")
            .replace(/\[(.+)\]/, ":$1"))
            .replace(/\\/g, "/");
        if (entry.isDirectory()) {
            return defineCustomRoutes(fullPath, routePath);
        }
        else if (entry.isFile() && entry.name.endsWith(".tsx")) {
            return { path: routePath, file: fullPath.replace(/^src[\\/]/, "").replace(/\\/g, "/") };
        }
    }));
    return routes.flat().filter((route) => Boolean(route));
}
