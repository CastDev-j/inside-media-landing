const Colors = require("./src/styles/colors").Colors;

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        screens: {
            base: "0px",
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
            xxl: "1440px",
            xxxl: "1920px",
        },
        extend: {
            colors: {
                primary: Colors.primary,
                secondary: Colors.secondary,
                tertiary: Colors.tertiary,
            },
            fontSize: {
                h1: ["60px", "1.2"],
                "h1-lg": ["60px", "1.2"],
                "h1-md": ["45px", "1.2"],
                h2: ["60px", "1.2"],
                "h2-lg": ["50px", "1.2"],
                "h2-md": ["40px", "1.2"],
                h3: ["35px", "1.2"],
                "h3-lg": ["30px", "1.2"],
                "h3-md": ["25px", "1.2"],
                h4: ["25px", "1.2"],
                "h4-lg": ["20px", "1.2"],
                "h4-md": ["18px", "1.2"],
                h5: ["20px", "1.2"],
                "h5-lg": ["18px", "1.2"],
                h6: ["18px", "1.2"],
                "h6-md": ["16px", "1.2"],
                "h6-lg": ["15px", "1.2"],
                p: ["16px", "25px"],
                "p-lg": ["18px", "20px"],
                "p-md": ["16px", "20px"],
                "p-leading": ["25px", "1.2"],
            },

            letterSpacing: {
                p: "1px",
            },
            margin: {
                p: "0 0 10px",
                "p-last": "0",
            },
        },
    },
};
