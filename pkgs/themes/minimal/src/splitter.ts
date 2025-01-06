import { type SplitterSlots, createSplitterSlots } from "@spark-css/core";
// import { generateSlotsDocs, generateStyledSlotsDocs } from "@spark-css/utils";

/**
 * **Splitter**
 * @description A component that divides your interface into resizable sections.
 *
 * @returns
 * ```js
 * {
 *   base: "splitter",
 *   root: "splitter__root",
 *   panel: "splitter__panel",
 *   resizeTrigger: "splitter__resize-trigger"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/splitter#anatomy)
 */
export const splitterSlots = createSplitterSlots({});

// * Uncomment before styling slots
// console.log(generateSlotsDocs("splitter", splitterSlots));

/**
 * **Splitter**
 * @description A component that divides your interface into resizable sections.
 *
 * @example
 * ```css
 * .splitter { }
 *
 * .splitter__root { }
 *
 * .splitter__panel { }
 *
 * .splitter__resize-trigger { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/splitter#anatomy)
 */
export const splitterStyledSlots = {
  base: "splitter",
  root: "splitter__root",
  panel: "splitter__panel",
  resizeTrigger: "splitter__resize-trigger"
} as const satisfies Record<SplitterSlots, string | string[]>;

// * Uncomment after styling slots
// console.log(generateStyledSlotsDocs("splitter", splitterStyledSlots));