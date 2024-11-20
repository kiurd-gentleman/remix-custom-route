import { promises as fs } from "fs";
import path from "path";
export async function getRoutes(dir, basePath = "") {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const routes = await Promise.all(entries.map(async (entry) => {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            return getRoutes(fullPath, path.join(basePath, entry.name).replace(/\\/g, "/"));
        }
        if (entry.isFile() && entry.name.endsWith(".tsx")) {
            let routePath = path
                .join(basePath, entry.name.replace(/\.tsx$/, ""))
                .replace(/\/index$/, "")
                .replace(/\[\.{3}(.+)\]/, "*:$1")
                .replace(/\[(.+)\]/, ":$1")
                .replace(/\\/g, "/");
            if (entry.name === "index.tsx" && basePath === "") {
                routePath = "/";
            }
            if (entry.name === "index.tsx") {
                routePath = basePath || "/";
            }
            return [
                {
                    path: routePath,
                    file: fullPath.replace(/^app[\\/]/, "").replace(/\\/g, "/"),
                },
            ];
        }
        return undefined;
    }));
    return routes
        .flat()
        .filter((route) => !!route)
        .sort((a, b) => {
        if (a.path === "/")
            return -1;
        if (b.path === "/")
            return 1;
        if (a.path.includes(":") && !b.path.includes(":"))
            return 1;
        if (!a.path.includes(":") && b.path.includes(":"))
            return -1;
        return a.path.length - b.path.length;
    });
}
