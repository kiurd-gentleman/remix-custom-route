# Remix Custom Routes

`remix-custom-routes` is a Vite plugin that dynamically configures routes for Remix projects, leveraging a custom directory structure for streamlined route management.
## Installation
```bash
npm install remix-custom-router
```
## Uses
1. Configure in `vite.config.ts`:

```typescript

import customRoutesPlugin from 'remix-custom-router';

export default {
    plugins: [
        customRoutesPlugin({ routesDir: 'app/routes' })
    ],
};
```
2. Define Routes Directory: Organize routes in the specified `routesDir` with `.tsx` files.
3. Build and Run: Remix will automatically detect and configure routes from the specified directory.

```bash
npm run dev
```
## Options
- `routesDir`: The directory containing route files. Default: `app/routes`

## Example
```typescript
import customRoutesPlugin from 'remix-custom-router';

export default defineConfig({
    plugins: [
        customRoutesPlugin({
            routesDir: 'app/routes'
        })
    ]
});
```

## Contributing
Feel free to submit issues or pull requests.
