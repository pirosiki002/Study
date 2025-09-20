import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  // stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  stories: ['../src/components/**/*.stories.@(js|jsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-vitest',
    '@chromatic-com/storybook',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};
export default config;
