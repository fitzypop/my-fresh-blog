import { ComponentChildren } from "preact";

export function FlexRowStart(
  props: { children: ComponentChildren; class?: string },
) {
  return (
    <div
      class={`flex flex-row items-center justify-start ${props.class}`}
    >
      {props.children}
    </div>
  );
}

export function FlexRowCenter(
  props: { children: ComponentChildren; class?: string },
) {
  return (
    <div
      class={`flex flex-row items-center justify-center ${props.class}`}
    >
      {props.children}
    </div>
  );
}
