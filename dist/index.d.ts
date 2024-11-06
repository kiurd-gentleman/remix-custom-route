export default function customRoutesPlugin(options: {
    routesDir: string;
}): {
    name: string;
    configResolved(config: any): Promise<void>;
};
