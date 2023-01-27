import { site } from "../utils/site.ts";
import { GitHub } from "./Github.tsx";

export function Footer() {
  return (
    <footer class="w-full mx-auto mt-24 sm:!mt-28 mb-8 flex items-center justify-center">
      <span class="flex items-center gap-4">
        <a
          class="flex items-center gap-2 text-gray-700"
          href="https://fresh.deno.dev"
        >
          <img
            width="197"
            height="37"
            src="./fresh-badge-dark.svg"
          />
        </a>
        <a
          class="hover:underline flex gap-2 items-center"
          href={site.viewSourceUrl}
        >
          <GitHub class="h-5 w-5 text-gray-500" />
          Source
        </a>
      </span>
    </footer>
  );
}
