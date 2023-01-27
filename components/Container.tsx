import type { ComponentChildren } from "preact";

export function Container(props: { children: ComponentChildren }) {
  return <div class="px-4 mx-auto max-w-screen-md">{props.children}</div>;
}
