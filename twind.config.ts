import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  setup: {
    theme: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        // "darkgreen": "#007645",
      },
    },
  },
} as Options;
