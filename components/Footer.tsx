import { Github } from "../components/Github.tsx";
import { FlexRowCenter } from "./Flex.tsx";

export function Footer() {
  return (
    <footer>
      <FlexRowCenter class="w-full mt-24 sm:!mt-28 mb-4 gap-5">
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

        <Github class="h-5 w-5 text-white">
          Source
        </Github>
      </FlexRowCenter>
    </footer>
  );
}
