# remix-custom-router

`remix-custom-router` is a Vite plugin for dynamically managing Remix project routes. It simplifies route discovery and configuration by analyzing your project's folder structure, allowing you to focus on building features rather than handling manual route setups.

## Features

- **Dynamic Route Discovery**: Automatically configures routes based on the specified folder structure.
- **Custom Parameters**: Supports dynamic and nested route parameters.
- **Plug-and-Play Integration**: Easily integrates with Vite and Remix projects.

## Installation

```bash
npm install remix-custom-router
```

## Usage

### Vite Configuration

Add the plugin to your `vite.config.ts`:

```typescript
import { customRoute } from "remix-custom-router";

export default defineConfig({
   plugins: [
      remix({
         routes : async (defineRoutes) => {
            return customRoute("app/routes", defineRoutes);
         }
      }),
      tsconfigPaths(),
   ],
});
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
import { useParams } from "@remix-run/react";

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
