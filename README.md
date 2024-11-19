Here’s a detailed and SEO-friendly description for your README file:

---

# remix-custom-routes

`remix-custom-routes` is a Vite plugin for dynamically managing Remix project routes. It simplifies route discovery and configuration by analyzing your project's folder structure, allowing you to focus on building features rather than handling manual route setups.

## Features

- **Dynamic Route Discovery**: Automatically configures routes based on the specified folder structure.
- **Custom Parameters**: Supports dynamic and nested route parameters.
- **Plug-and-Play Integration**: Easily integrates with Vite and Remix projects.

## Installation

```bash
npm install remix-custom-routes
```

## Usage

### Vite Configuration

Add the plugin to your `vite.config.ts`:

```typescript
import viteCustomRoutesPlugin from 'remix-custom-routes';

export default {
    plugins: [
        viteCustomRoutesPlugin({
            routesDir: 'app/routes', // Specify your routes directory
        }),
    ],
};
```

### Folder Structure

Organize your routes in the following structure:

```
app/
└── routes/
    ├── index.tsx          // Maps to '/'
    ├── about.tsx          // Maps to '/about'
    ├── blog/
    │   ├── index.tsx      // Maps to '/blog'
    │   └── [slug].tsx     // Maps to '/blog/:slug'
    └── dashboard/
        └── [id].tsx       // Maps to '/dashboard/:id'
```

### How It Works

- Files named `index.tsx` map to `/`.
- Files with `[param]` syntax map to dynamic parameters (e.g., `/blog/:slug`).
- Nested folders create nested routes.

### Passing Parameters

Dynamic parameters (e.g., `[id]`) are automatically recognized. For example, if you have:

```
routes/
└── user/
    └── [id].tsx
```

You can access the `id` parameter in your component using Remix's `useParams` hook:

```tsx
import { useParams } from "remix";

export default function User() {
    const { id } = useParams();
    return <div>User ID: {id}</div>;
}
```

## Build & Run

1. Build the project:

   ```bash
   npm run build
   ```

2. Run your Vite development server, and the routes will automatically load.

## Contribution

Contributions are welcome! Submit your issues or pull requests to improve the package.

---
