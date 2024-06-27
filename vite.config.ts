// import { defineConfig } from 'vitest/config';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// import packageJson from './package.json';

export default defineConfig({
  plugins: [react()],
  // test: {
  //   name: packageJson.name,
  //   dir: './src',
  //   globals: true,
  //   // coverage: {
  //   //   provider: 'istanbul',
  //   //   include: ['src/**/*'],
  //   // },
  // },
});
