---
title: Getting started
date: 2024-08-18
---

![nature](/assets/img/liana-s.jpg)


!The moon](https://applegate-paul.mo.cloudinary.net/zoom/luke-miller-FUzzFCmJkwk-unsplash.jxl)


Make a directory and navigate to it:

``` bash
mkdir my-site-name
cd my-site-name
```

Clone the elva repository:

``` bash
git clone https://github.com/scottsweb/elva.git .
```

Install dependencies:

``` bash
npm install
```

Run Eleventy for site development. View the site at `http://localhost:8080`:

``` bash
npm run dev
```

Generate a production-ready build to the `dist` folder:

``` bash
export NODE_ENV=production && npm run build
```

You can set the environment variable `NODE_ENV=production` in your hosting control panel too.

To use [Front Matter CMS](https://frontmatter.codes/), install [VSCodium](https://vscodium.com/) or [Visual Studio Code](https://code.visualstudio.com/) and enable the extension (if it doesn't enable automatically). It will open each time you launch your project.


