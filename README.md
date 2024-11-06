# Remix Custom Routes

`remix-custom-routes` is a Vite plugin that dynamically configures routes for Remix projects, leveraging a custom directory structure for streamlined route management.
## Installation
```bash
npm install remix-custom-router
```
## Uses
1. Configure in `vite.config.ts`:

```typescript

import viteCustomRoutesPlugin from 'remix-custom-routes';

export default {
    plugins: [
        viteCustomRoutesPlugin({ routesDir: 'src/routes' })
    ],
};
```
2. Define Routes Directory: Organize routes in the specified `routesDir` with `.tsx` files.
3. Build and Run: Remix will automatically detect and configure routes from the specified directory.

```bash
npm run dev
```
## Options
- `routesDir`: The directory containing route files. Default: `src/routes`

## Example
```typescript
import viteCustomRoutesPlugin from 'remix-custom-routes';

export default defineConfig({
    plugins: [
        viteCustomRoutesPlugin({
            routesDir: 'app/routes'
        })
    ]
});
```

## Contributing
Feel free to submit issues or pull requests.
