// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/tooltip.ts
import { type TooltipSlots, createTooltipSlots } from "@spark-css/core";
// import { generateSlotsDocs, generateStyledSlotsDocs } from "@spark-css/utils";

/**
 * **Tooltip**
 * @description A label that provides information on hover or focus.
 *
 * @returns
 * ```js
 * {
 *   base: "parkTooltip",
 *   trigger: "parkTooltip__trigger",
 *   arrow: "parkTooltip__arrow",
 *   arrowTip: "parkTooltip__arrowTip",
 *   positioner: "parkTooltip__positioner",
 *   content: "parkTooltip__content"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/tooltip#anatomy)
 */
export const tooltipSlots = createTooltipSlots({ prefix: "park", caseConvention: "camel" });

// * Uncomment before styling slots
// console.log(generateSlotsDocs("tooltip", tooltipSlots));

/**
 * **Tooltip**
 * @description A label that provides information on hover or focus.
 *
 * @example
 * ```css
 * .parkTooltip { }
 *
 * .parkTooltip__trigger { }
 *
 * .parkTooltip__arrow { }
 *
 * .parkTooltip__arrowTip { }
 *
 * .parkTooltip__positioner { }
 *
 * .parkTooltip__content {
 *   (@)apply px-3 py-2 max-w-64 bg-[--colors-gray-a12] rounded-l2 shadow-sm z-[--z-index-tooltip] text-bg-default text-xs font-semibold [&:is([open],_[data-open],_[data-state=open])]:animate-fade-in [&:is([closed],_[data-closed],_[data-state=closed])]:animate-fade-out;
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/tooltip#anatomy)
 */
export const tooltipStyledSlots = {
  base: "parkTooltip",
  trigger: "parkTooltip__trigger",
  arrow: "parkTooltip__arrow",
  arrowTip: "parkTooltip__arrowTip",
  positioner: "parkTooltip__positioner",
  content: [
    "parkTooltip__content",

    // Spacing
    "px-3",
    "py-2",

    // Sizing
    "max-w-64",

    // Backgrounds
    "bg-[--colors-gray-a12]",

    // Borders
    "rounded-l2",

    // Effects
    "shadow-sm",

    // Layout
    "z-[--z-index-tooltip]",

    // Typography
    "text-bg-default",
    "text-xs",
    "font-semibold",

    // Transitions & Animation
    "[&:is([open],_[data-open],_[data-state=open])]:animate-fade-in",
    "[&:is([closed],_[data-closed],_[data-state=closed])]:animate-fade-out"
  ]
} as const satisfies Record<TooltipSlots, string | string[]>;

// * Uncomment after styling slots
// console.log(generateStyledSlotsDocs("tooltip", tooltipStyledSlots));