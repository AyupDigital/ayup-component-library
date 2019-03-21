let mix = require("laravel-mix");

require("mix-html-builder");

mix
  .js("src/app.js", "dist")
  .sass("src/scss/style.scss", "dist/style.css")
  .options({
    autoprefixer: {
      options: {
        browsers: ["last 6 versions"],
      },
    },
  })
  .setPublicPath("dist")
  .copy("src/assets", "dist/assets")
  .buildHtml({ inject: false });
