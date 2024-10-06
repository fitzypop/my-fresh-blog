import { Container } from "@/components/Container.tsx";
import { settings } from "@/utils/constants.ts";
import { Github } from "@/components/Github.tsx";
import { Linkedin } from "@/components/Linkedin.tsx";
import { FlexRowStart } from "@/components/Flex.tsx";

export function HomeHeader() {
  return (
    <header
      id="header"
      class="pb-3 bg-gradient-to-tl from-orange-500 to-sky-500 text-black"
    >
      <Container>
        <div class="flex flex-col mt-5">
          <FlexRowStart class="w-full gap-5">
            <img
              src="/cool.jpeg"
              alt="avatar"
              width="500"
              height="500"
              class="w(24 md:32) h(24 md:32) rounded-full bg-black"
            />
            <h1 class="text-4xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl font-bold">
              {settings.title}
            </h1>
          </FlexRowStart>

          <FlexRowStart class="w-full pl-5 mt-5">
            <h2 class="text-2xl">
              Sup. I'm Joe Fitzy. I write code, and blogs sometimes...
            </h2>
          </FlexRowStart>
          <FlexRowStart class="w-full pl-5">
            <p class="">I'm currently looking for work. If you need a Software Engineer, <a class="text-blue-700 hover:underline"
              href="https://drive.google.com/file/d/1e-1VlXroNucB017A9B7EQoQmOHZfw3WP/view?usp=sharing"
              target="_blank" rel="noopener noreferrer">my Resumè</a> is available.</p>
          </FlexRowStart>

          <FlexRowStart class="w-full pl-5 mt-5 gap-5">
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
