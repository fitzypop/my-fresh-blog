import { Options } from "$fresh/plugins/twind.ts";
import * as colors from "twind/colors";

export default {
  darkMode: "class",
  selfURL: import.meta.url,
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "darkgreen": "#004d1a",
        "default": "#131516",
        ...colors,
      },
    },
  },
} as Options;
