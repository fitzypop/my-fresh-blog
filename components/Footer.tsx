import { Github } from "../components/Github.tsx";
import { site } from "../utils/site.ts";
import { FlexRowCenter } from "./Flex.tsx";

export function Footer() {
  return (
    <footer>
      <FlexRowCenter class="w-full mt-24 sm:!mt-28 mb-4 gap-5">
        <p>&copy; 2023 {site.copyrightName}</p>
        <p>•</p>
        <Github class="h-5 w-5 text-white">
          Source
        </Github>
        <p>•</p>
        <a
          href="https://fresh.deno.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            width="197"
            height="37"
            src="/fresh-badge-dark.svg"
            alt="Made with Fresh"
          />
        </a>
      </FlexRowCenter>
    </footer>
  );
}
