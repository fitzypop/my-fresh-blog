import { Options } from "$fresh/plugins/twind.ts";
import * as colors from "twind/colors";

export default {
  selfURL: import.meta.url,
  setup: {
    theme: {
      colors: {
        transparent: "transparent",
      },
    },
  },
} as Options;
