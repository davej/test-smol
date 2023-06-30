const config = {
  kit: {
    target: '#svelte',
    vite: {
      css: {
        postcss: {
          plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
          ],
        },
      },
    },
  },
};

export default config;