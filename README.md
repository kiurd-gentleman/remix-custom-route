# Remix Custom Routes

This Vite plugin dynamically generates routes based on the file structure in a specified directory.

## Installation
```bash
npm install remix-custom-router
```
## Uses
add the plugin to your vite.config.js file and pass the routesDir option with the path to the directory containing your routes.

```javascript

import customRoutesPlugin from 'remix-custom-router';

export default {
    plugins: [
        customRoutesPlugin({ routesDir: 'app/your-folder' }),
    ],
};
```
