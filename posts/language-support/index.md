---
title: "Language support"
date: "9 April 2022"
excerpt: "Learn what languages are supported and how to add new ones"
topic: "App development"
---

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
