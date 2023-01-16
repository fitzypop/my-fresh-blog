import type { ComponentChildren } from "preact";

export function Container({ children }: { children: ComponentChildren }) {
  return <div class="px-4 mx-auto max-w-screen-md">{children}</div>;
}
