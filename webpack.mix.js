let mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");

mix.js("./src/js/app.js", "./public/js/app.js")
    .sass("./src/css/app.sass", "./public/css/app.css")
    .options({
        processCssUrls: false,
        postCss: [tailwindcss("./tailwind.config.js")]
    });
