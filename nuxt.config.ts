import { defineNuxtConfig } from "nuxt";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

export default defineNuxtConfig({
  vite: {
    plugins: [
      Components({
        resolvers: [AntDesignVueResolver()],
      }),
    ],
    // @ts-expect-error: Missing ssr key
    ssr: {
      noExternal: ["moment", "compute-scroll-into-view", "ant-design-vue"],
    },
  },
  buildModules: [
    // pinia plugin
    "@pinia/nuxt",
  ],
  meta: {
    script: [
      { src: "/js/tinymce/tinymce.min.js", defer: false },
      {
        src: "/js/jquery-3.6.0.min.js",
        defer: false,
      },
      { src: "/js/tinymce/load.js", body: true, async: true, defer: true },
    ],
  },
});
