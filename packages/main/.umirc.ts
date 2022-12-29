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
    master: {
      apps: [
        {
          name: 'reactchild',
          entry: '//localhost:777'
        },
        {
          name: 'vuechild',
          entry: '//localhost:888'
        },
      ]
    }
  }
});
