// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Menubar/index.ts
import type { SVATraits } from "jade-garden";

/**
 * **Menubar**
 * @description A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.
 * @see [source](https://reka-ui.com/docs/components/menubar#anatomy)
 */
export const slots = [
  "root",
  "trigger",
  "portal",
  "content",
  "arrow",
  "item",
  "group",
  "separator",
  "checkboxItem",
  "itemIndicator",
  "label",
  "radioGroup",
  "radioItem",
  "sub",
  "subContent",
  "subTrigger",
  "menu"
] as const;

/**
 * **Menubar**
 * @description A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.
 * @see [source](https://reka-ui.com/docs/components/menubar#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Menubar**
 * @description A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.
 * @see [source](https://reka-ui.com/docs/components/menubar#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    trigger: {
      state: "open" | "closed";
      highlighted: "";
      disabled: "";
    };
    content: {
      state: "open" | "closed";
      side: "left" | "right" | "bottom" | "top";
      align: "start" | "end" | "center";
    };
    item: {
      highlighted: "";
      disabled: "";
    };
  }
>;
