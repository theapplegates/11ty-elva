---
title: Getting started
date: 2024-08-18
---

![nature](/assets/img/liana-s.jpg)

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


<img data-src="https://res.cloudinary.com/paulapplegate-com/image/upload/c_limit,w_auto/dpr_auto,f_auto,q_auto/florian-hahn-Il-H7ViFzNY-unsplash_qbm49p.jxl" class="cld-responsive">

<img src="https://res.cloudinary.com/paulapplegate-com/image/upload/f_jxl,q_auto,c_fill/c_scale,w_auto:breakpoints_200_1920_30_15/florian-hahn-Il-H7ViFzNY-unsplash_qbm49p.jxl" alt="pic" sizes="100vw" />
