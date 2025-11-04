const config = {
  plugins: {
    // Tailwind v4 moved its PostCSS plugin to a separate package. Turbopack
    // (used by Next 16) expects the PostCSS plugin to be provided under
    // "@tailwindcss/postcss". Ensure that package is installed and listed
    // in devDependencies.
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};

export default config;
