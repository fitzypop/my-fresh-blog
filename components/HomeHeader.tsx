import { Container } from "./Container.tsx";
import { site } from "../data/site.ts";

export function HomeHeader() {
  return (
    <header class="bg-darkgreen relative min-h-[20vh]">
      <Container>
        <div class="flex items-center ">
          <h1 class="text-4xl lg:text-8xl font-bold absolute bottom-20">
            {site.title}
          </h1>
          <h2 class="text-1xl absolute bottom-5">
            Sup. I'm Fitzypop. I write code, and blogs sometimes...
          </h2>
        </div>
      </Container>
    </header>
  );
}
