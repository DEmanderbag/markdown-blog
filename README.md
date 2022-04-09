Table of contents:
- [How does it work](#how-does-it-work)
- [About the project](#about-the-project)
- [Language support](#language-support)

## How does it work

Simple and easy solution for your first blog with support for multiple languages (as many as you know them). The website is optimised and responsive and it comes with light and dark modes, easily customizable. Data is coming from the Markdown file that is located in the posts folder.

---

## About the project

This project comes out of the box with the support for English (EN) and German (DE) languages. Data is located in the posts folder which is additionally separated by specific topic. Code is simple and easy to understand with customisation in mind. You can change colours, fonts and even languages that are supported with just a couple of lines of code.

This project is using Next.js with internalization (i18n) support and generates data with getStaticProps and getStaticPaths.

To generate a new post all you need to do is create a new folder inside the post folder that will contain the name of the article. The name of the folder is what it will show up as a link.

If you are planning to add additional languages that are also very simple, just add that language inside the i18n.json file in the locales array. Inside the locales folder, you are also going to add that local with a specific translation. And in other, for the posts to support that new language just inside the specific post folder add an index.[locale].md

Colours are located in \_variables.scss file and are separated for both dark and light mode which can be easily changed to make it feel unique.

---

## Language support

This project comes out of the box with the support for English (EN) and German (DE) languages. But if you know other languages that are also simple to set up.

Inside the i18n.json file inside the locales array just add a local for the language you want to support.

```
 {
 "locales": ["en", "de", "new locale"],
 "defaultLocale": "en",
 "pages": {
   "*": ["common"]
 }
```

The next step is to add a translation for UI elements on the website. To do that inside the locales folder create a new folder with the name of your locale that was previously added inside the i18n.json file.

You are ready to go now, you are now supporting a new language. When creating posts inside the post folder just don't forget to add a file for your new supported language, the file should be named index.[locale].md
