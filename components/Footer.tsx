import { Github } from "@/components/Github.tsx";
import { settings } from "@/utils/constants.ts";
import { FlexRowCenter } from "@/components/Flex.tsx";

export function Footer() {
  return (
    <footer>
      <FlexRowCenter class="w-full my-4 gap-2">
        <p>&copy; 2023 {settings.copyrightName}</p>
        <p>•</p>
        <Github class="h-5 w-5">
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
