# 🚀 Inside Media Landing page

![Agency Aestro Template Page](/src/static/images/preview.webp)
[<img src="/src/static/images/link-live.png">](https://inside-media-landing.netlify.app)
[<img src="/src/static/images/link-contact.png">](https://www.codexcode.store/pages/contact)

## 💻 Tech Stack

Astro.build + React + Emotion + custom variables

### ⚡️ Why like this?

**Astro.build** is a modern front-end framework that allows you to build faster, optimized websites. It's compatible with React, which is a popular library for building user interfaces.

**Tailwind** - Tailwind is great, this give us faster coding results that using only CSS-IN-JS, Its great, but like others tools, it have his own limits & thats why we use **Emotions**

**Emotion** is a performant and flexible CSS-in-JS library, which lets you write CSS styles with JavaScript - This with Emotions allows us to create everything in minutes - reason why we using emotions with Tailwind is simple, when you have more "difficult" block to write, its better to split some code between **Emotions** & **Tailwind**

## ⚠️ How to keep good performance?

If you make modifications, such as adding an image, ensure that the image is saved in .WEBP format and is of a small size. Avoid using large images as they can negatively impact performance. You can use [TinyPNG](https://tinypng.com/) to compress your images.

## 🎨 Static Media

-   Fonts - setup there you'r all fonts - you don't want to get link to google - this can slow down you'r page, but if you needed, you can delete it and use google tags

-   images - Images are setup with typescript, so this component is easy to use & when you import image there you don't need to worry about use import for every single image

```
  @example
  <Image src="logo" alt="logo" width="50px" height="50px" />
```

-   icons - Icons are SVG files that you can use in React components, import all you'r icons in static/index.tsx and use it with

```
  @example
  <Icon name="icon" />
```

## 💻 Sitemap - robots - SEO ⚠️ IMPORTANT ⚠️

⚠️ **Search for** ⚠️ **siteUrl** & change website main link to load properly all preview images & ect

also you can check if there is any CHANGEME or YOUR META DESCRIPTION FOR SEO - if yes, then you want to change it

**Sitemap** is generated automatically from astro.config file.

**Astro.config.mjs** There you can find example usage of sitemap, we add comments with if statements for various scenario, so check it & use it as you like!

**Robots** - Also its generated automatically.

## 📞 Contact Form

If there is any form with **ZOD** & **API CALLS**

For contact form you need to replace those **ID** with the correct one.
API: https://emailjs.com
Other solution: If you want to add other solution, then change axios request with other solution - should work

```
    service_id: "service_ID", -
    template_id: "template_TEMPLATE_ID",
    user_id: "USER_ID",
```

## 🎨 Styles

All global styles like, colors, fonts, normalize or things like mediaQuery are stored in styles folder,

With **Emotions** We create a MediaQuery function that allows us to create mobile styling easily.
MediaQuery can be used with MIN & MAX OR BETWEEN - that means code will display depends on what we need to do:

```
    @returns @media example: (min-width: 768px)
    ${MediaQuery.min(breakpoint)} {
        //code
    }
```

```
    @returns @media example: (min-width: 768px)
    ${MediaQuery.max(breakpoint)} {
        //code
    }
```

```
    @returns @media example: (min-width: 768px) and (max-width: 991px)
    ${MediaQuery.between("breakpoint1", "breakpoint2")} {
        //code
    }
```

All colors are used as css var to have easier access in app

Rest code CSS is made with Emotions - read [Emotions docs](https://emotion.sh/docs/introduction) to understand how its working.

Here we use Emotions with Tailwind, so you don't need to create css file for some extra styling, use Emotions for that!

## ⚠️ Tailwind

Emotions should work with

```
yarn dev or npm run dev
```

but if this for some reason don't work - use this

```
npx tailwindcss -i ./src/styles/tailwind/tailwind.css -o ./src/styles/tailwind/tailwind.output.css --watch
```

this will create instance in CMD and it will watch for all tailwind changes.

## 🧞 Commands

#### All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 📞🧞 Contact & Support

If you bought our theme, you get 100% our support!
have any problems or questions, please let us know here: [Contact Form](https://www.codexcode.store/pages/contact)

## 🧞 Authors

-   [@codexcode](https://www.codexcode.pl)
