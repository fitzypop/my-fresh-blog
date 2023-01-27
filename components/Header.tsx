import { site } from "../utils/site.ts";

export function Header() {
  return (
    <header class="bg-gradient-to-bl from-orange-500 to-sky-500 px-3 py-3 h-16 flex items-center">
      <div class="px-4 max-w-screen-md">
        <a href="/" class="text-2xl font-bold hover:text-underline">
          {site.title}
        </a>
      </div>
    </header>
  );
}
