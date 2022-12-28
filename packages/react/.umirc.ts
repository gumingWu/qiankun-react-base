import { defineConfig } from "umi";

export default defineConfig({
  npmClient: 'pnpm',
  conventionRoutes: {
    exclude: [/\/components\//, /\/models\//],
  },
  plugins: [
    require.resolve('@umijs/plugins/dist/qiankun')
  ],
  qiankun: {
    slave: {}
  }
});
