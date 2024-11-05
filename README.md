# Rimix Custom Routes Plugin

This Vite plugin dynamically generates routes based on the file structure in a specified directory.

## Installation
```bash
npm install vite-custom-routes
```
## Uses
add the plugin to your vite.config.js file and pass the routesDir option with the path to the directory containing your routes.

```javascript
import customRoutes from 'vite-custom-routes'

import customRoutesPlugin from 'vite-custom-routes';

export default {
    plugins: [
        customRoutesPlugin({ routesDir: 'app/your-folder' }),
    ],
};
```
