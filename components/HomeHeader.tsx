import { Container } from "./Container.tsx";
import { site } from "../data/site.ts";

export function HomeHeader() {
  return (
    <header class="bg-gray-700 relative min-h-[30vh]">
      <Container>
        <h1 class="text-4xl lg:text-8xl font-bold absolute bottom-6 flex items-center text-white">
          {site.title}
        </h1>
      </Container>
    </header>
  );
}
