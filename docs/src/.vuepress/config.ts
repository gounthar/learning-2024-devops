import { defaultTheme } from "@vuepress/theme-default";
import { searchPlugin } from "@vuepress/plugin-search";
import { nprogressPlugin } from "@vuepress/plugin-nprogress";
import { pwaPlugin } from "@vuepress/plugin-pwa";
import { seoPlugin } from "vuepress-plugin-seo2";
import { defineUserConfig } from "vuepress";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";


export default defineUserConfig({
  
  base: "/learning-2024-devops/",
  port: 3000,

  head: [
    ["link", { rel: "icon", href: "/learning-2024-devops/favicon.ico" }],
    [
      "link",
      { rel: "manifest", href: "/learning-2024-devops/manifest.webmanifest" },
    ],
    ["meta", { name: "theme-color", content: "#027DFD" }],
  ],

  theme: defaultTheme({
        logo: 'logo_worldline.png',

        sidebar: [
          { text: 'Home', link: '/' },
          "/overview/",
          "/game/",
          "/shell/",
          "/virt/", 
          "/container/", 
          "/ci/", 
          "/orchestration/", 
          "/prov/", 
          //"/cloud/", 
          //"/ms/", 

        ], 
  }),

  plugins: [
    seoPlugin({
      hostname: "https://gounthar.github.io/learning-2024-devops/",
    }),
    mdEnhancePlugin({
      // Enable figure
      figure: true,
      // Enable image lazyload
      imgLazyload: true,
      // Enable image mark
      imgMark: true,
      // Enable image size
      imgSize: true,
    }),
  ],
});
