import { createSlots } from "@spark-css/core/collapsible";
/**
 * **Collapsible**
 * @description An interactive component that can be expanded or collapsed.
 *
 * @returns
 * ```js
 * {
 *   base: "collapsible",
 *   root: "collapsible__root",
 *   trigger: "collapsible__trigger",
 *   content: "collapsible__content"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/collapsible#anatomy)
 */
const slots = createSlots({});
/**
 * @typedef { import("@spark-css/core/collapsible").Slots } Slots
 * @type { Record<Slots, string | string[]> }
 */
const styledSlots = {
  base: slots.base,
  root: slots.root,
  trigger: slots.trigger,
  content: slots.content
};
/**
 * **Collapsible**
 * @description An interactive component that can be expanded or collapsed.
 *
 * @example
 * ```css
 * .collapsible { }
 *
 * .collapsible__root { }
 *
 * .collapsible__trigger { }
 *
 * .collapsible__content { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/collapsible#anatomy)
 */
export const collapsibleStyles = styledSlots;
