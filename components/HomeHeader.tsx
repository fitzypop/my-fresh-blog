import { Container } from "./Container.tsx";
import { site } from "../utils/site.ts";
import { GitHub } from "./Github.tsx";

export function HomeHeader() {
  return (
    <header
      id="header"
      class="pb-3 bg-gradient-to-tl from-orange-500 to-sky-500 text-black"
    >
      <Container>
        <div class="flex flex-col items-center mt-10">
          <div class="w-full flex flex-row gap-5 items-center justify-start">
            <img
              src="/cool.jpeg"
              alt="avatar"
              width="500"
              height="500"
              class="w(24 md:32) h(24 md:32) rounded-full bg-black"
            />
            <h1 class="text-4xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl  font-bold">
              {site.title}
            </h1>
          </div>

          <span class="w-full flex flex-row items-center justify-start pl-5 mt-8">
            <h2 class="text-2xl">
              Sup. I'm Fitzypop. I write code, and blogs sometimes...
            </h2>
          </span>
          <span class="flex flex-row items-center justify-center mt-4 gap-4">
            <a
              class="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/fitzypop"
            >
              <GitHub class="h-8 w-8 text-black hover:text-gray-600" />
              {/* TODO Add linkdin and email icons */}
            </a>
          </span>
        </div>
      </Container>
    </header>
  );
}
