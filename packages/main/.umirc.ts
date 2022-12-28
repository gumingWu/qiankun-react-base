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
          name: 'react-child',
          entry: '//localhost:777'
        },
        {
          name: 'vue-child',
          entry: '//localhost:888'
        },
      ]
    }
  }
});
