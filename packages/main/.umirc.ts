import { defineConfig } from "umi";

export default defineConfig({
  npmClient: 'pnpm',
  conventionRoutes: {
    exclude: [/\/components\//, /\/models\//],
  }
});
