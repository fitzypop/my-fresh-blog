import { Container } from "./Container.tsx";
import { site } from "../utils/site.ts";
import { Github } from "./Github.tsx";
import { Linkedin } from "./Linkedin.tsx";
import { FlexRowStart } from "./Flex.tsx";

export function HomeHeader() {
  return (
    <header
      id="header"
      class="pb-3 bg-gradient-to-tl from-orange-500 to-sky-500 text-black"
    >
      <Container>
        <div class="flex flex-col items-center mt-10">
          <FlexRowStart class="w-full gap-5">
            <img
              src="/cool.jpeg"
              alt="avatar"
              width="500"
              height="500"
              class="w(24 md:32) h(24 md:32) rounded-full bg-black"
            />
            <h1 class="text-4xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl font-bold">
              {site.title}
            </h1>
          </FlexRowStart>

          <FlexRowStart class="w-full pl-5 mt-8">
            <h2 class="text-2xl">
              Sup. I'm Fitzypop. I write code, and blogs sometimes...
            </h2>
          </FlexRowStart>

          <FlexRowStart class="w-full pl-5 mt-4 gap-4">
            <Github
              class="h-8 w-8 hover:text-gray-600"
              to="https://github.com/fitzypop"
            />
            <Linkedin class="h-8 w-8 hover:text-gray-600" />
          </FlexRowStart>
        </div>
      </Container>
    </header>
  );
}
