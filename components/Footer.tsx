import { GitHub } from "../components/Github.tsx";
import { site } from "../utils/site.ts";

export function Footer() {
  return (
    <footer class="w-full mx-auto mt-24 sm:!mt-28 mb-8 flex items-center justify-center">
      <span class="flex items-center gap-4">
        <a
          class="flex items-center gap-2"
          href="https://fresh.deno.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            width="197"
            height="37"
            src="/fresh-badge-dark.svg"
          />
        </a>
        <a
          class="hover:underline flex gap-2 items-center"
          href={site.viewSourceUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub class="h-5 w-5 text-white" />
          Source
        </a>
      </span>
    </footer>
  );
}
