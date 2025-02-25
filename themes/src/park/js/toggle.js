// * https://github.com/chakra-ui/ark/tree/main/website/src/demos/toggle.demo.tsx
import { createSlots } from "@spark-css/core/toggle";
/**
 * **Toggle**
 * @description A two-state button that can be toggled on or off.
 *
 * @returns
 * ```js
 * {
 *   base: "parkToggle",
 *   root: "parkToggle__root",
 *   indicator: "parkToggle__indicator"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/toggle#anatomy)
 */
const slots = createSlots({ prefix: "park", caseConvention: "camel" });
/**
 * @typedef { import("@spark-css/core/toggle").Slots } Slots
 * @type { Record<Slots, string | string[]> }
 */
const styledSlots = {
  base: slots.base,
  root: slots.root, // TODO: Determine if 'button' styles should be created: https://github.com/cschroeter/park-ui/blob/main/packages/panda/src/theme/recipes/button.ts
  indicator: [
    slots.indicator,
    // Layout
    "contents"
  ]
};
/**
 * **Toggle**
 * @description A two-state button that can be toggled on or off.
 *
 * @example
 * ```css
 * .parkToggle { }
 *
 * .parkToggle__root { }
 *
 * .parkToggle__indicator {
 *   (@)apply contents;
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/toggle#anatomy)
 */
export const toggleStyles = styledSlots;
