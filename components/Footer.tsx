import { Container } from "./Container.tsx";
import { site } from "../utils/site.ts";

export function Footer() {
  return (
    <footer class="w-full pt-10 pb-4">
      <Container>
        <div class="flex items-center justify-center mb-3">
          <a href="https://fresh.deno.dev">
            <img
              width="197"
              height="37"
              src="https://fresh.deno.dev/fresh-badge-dark.svg"
              alt="Made with Fresh"
            />
          </a>
        </div>
        <div class="text-center">
          <p>
            &copy; 2023 {site.copyrightName} •{" "}
            <a class="hover:text-underline" href={site.viewSourceUrl}>
              View Source
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
