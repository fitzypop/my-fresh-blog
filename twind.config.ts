import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "darkgreen": "#004d1a",
        "default": "#131516",
      },
    },
  },
} as Options;
