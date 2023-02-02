import { Github } from "../components/Github.tsx";
import { site } from "../utils/site.ts";

export function Footer() {
  return (
    <footer class="w-full mt-24 sm:!mt-28 mb-4 flex items-center justify-center gap-5">
      <a
        class=""
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
      <div class="bg-[#1C1C1C] w-[120px] h-[37px] grid place-items-center">
        <Github class="h-5 w-5 text-white">
          Source
        </Github>
      </div>
    </footer>
  );
}
