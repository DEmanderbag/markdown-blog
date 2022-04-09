---
title: "How does it work"
date: "9 April 2022"
excerpt: "About tech stack used for this project"
topic: "Development"
---

This project comes out of the box with the support for English (EN) and German (DE) languages. Data is located in the posts folder which is additionally separated by specific topic. Code is simple and easy to understand with customisation in mind. You can change colours, fonts and even languages that are supported with just a couple of lines of code.

This project is using Next.js with internalization (i18n) support and generates data with getStaticProps and getStaticPaths.

To generate a new post all you need to do is create a new folder inside the post folder that will contain the name of the article. The name of the folder is what it will show up as a link.

If you are planning to add additional languages that are also very simple, just add that language inside the i18n.json file in the locales array. Inside the locales folder, you are also going to add that local with a specific translation. And in other, for the posts to support that new language just inside the specific post folder add an index.[locale].md

Colours are located in \_variables.scss file and are separated for both dark and light mode which can be easily changed to make it feel unique.
