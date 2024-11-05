export default function viteCustomRoutesPlugin(options: {
    routesDir: string;
}): {
    name: string;
    configResolved(config: any): Promise<void>;
};
