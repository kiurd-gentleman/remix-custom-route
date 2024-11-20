interface Route {
    path: string;
    file: string;
}
export declare function getRoutes(dir: string, basePath?: string): Promise<Route[]>;
export {};
