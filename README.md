# unbuntulife-theme
To serve the theme change your directory into the theme/ folder.

### NPM & Tailwind
To install, run `npm ci`

To have TailwindCSS hot reload the CSS file run the following:
`npx tailwindcss -i ./tailwind-input.css -o ./assets/tailwind-output.css --minify --watch`

It is highly recommended to use the [TailwindCSS plugin](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) for VSCode

### Fixed Header
To activate a fixed header remove the commented out lines under the FIXED HEADER
comments in the assets/ud-theme.scss.liquid and assets/ud-theme.js files
