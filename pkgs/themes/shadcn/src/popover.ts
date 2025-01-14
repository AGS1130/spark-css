// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/popover.ts
import {
  type PopoverSlots,
  // createPopoverDocs,
  createPopoverSlots
} from "@spark-css/core";

/**
 * **Popover**
 * @description An overlay that displays additional information or options when triggered.
 *
 * @returns
 * ```js
 * {
 *   base: "parkPopover",
 *   arrow: "parkPopover__arrow",
 *   arrowTip: "parkPopover__arrowTip",
 *   anchor: "parkPopover__anchor",
 *   trigger: "parkPopover__trigger",
 *   indicator: "parkPopover__indicator",
 *   positioner: "parkPopover__positioner",
 *   content: "parkPopover__content",
 *   title: "parkPopover__title",
 *   description: "parkPopover__description",
 *   closeTrigger: "parkPopover__closeTrigger"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/popover#anatomy)
 */
export const popoverSlots = createPopoverSlots({ prefix: "park", caseConvention: "camel" });

// * Uncomment before styling slots
// createPopoverDocs("anatomy", popoverSlots);

/**
 * **Popover**
 * @description An overlay that displays additional information or options when triggered.
 *
 * @example
 * ```css
 * .parkPopover { }
 *
 * .parkPopover__arrow { }
 *
 * .parkPopover__arrowTip {
 *   (@)apply border-t border-l;
 * }
 *
 * .parkPopover__anchor { }
 *
 * .parkPopover__trigger { }
 *
 * .parkPopover__indicator { }
 *
 * .parkPopover__positioner {
 *   (@)apply relative;
 * }
 *
 * .parkPopover__content {
 *   (@)apply p-4 max-w-96 bg-bg-default rounded-l3 shadow-lg flex z-[--z-index-popover] [&:is([hidden])]:hidden flex-col [&:is([open],_[data-open],_[data-state=open])]:animate-fade-in [&:is([closed],_[data-closed],_[data-state=closed])]:animate-fade-out;
 * }
 *
 * .parkPopover__title {
 *   (@)apply text-sm font-medium;
 * }
 *
 * .parkPopover__description {
 *   (@)apply text-sm text-fg-muted;
 * }
 *
 * .parkPopover__closeTrigger {
 *   (@)apply text-fg-muted;
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/popover#anatomy)
 */
export const popoverStyledSlots = {
  base: "parkPopover",
  arrow: "parkPopover__arrow",
  arrowTip: [
    "parkPopover__arrowTip",

    // Borders
    "border-t",
    "border-l"
  ],
  anchor: "parkPopover__anchor",
  trigger: "parkPopover__trigger",
  indicator: "parkPopover__indicator",
  positioner: [
    "parkPopover__positioner",

    // Layout
    "relative"
  ],
  content: [
    "parkPopover__content",

    // Spacing
    "p-4",

    // Sizing
    "max-w-96",

    // Backgrounds
    "bg-bg-default",

    // Borders
    "rounded-l3",

    // Effects
    "shadow-lg",

    // Layout
    "flex",
    "z-[--z-index-popover]",
    "[&:is([hidden])]:hidden",

    // Flexbox & Grid
    "flex-col",

    // Transitions & Animation
    "[&:is([open],_[data-open],_[data-state=open])]:animate-fade-in",
    "[&:is([closed],_[data-closed],_[data-state=closed])]:animate-fade-out"
  ],
  title: [
    "parkPopover__title",

    // Typography
    "text-sm",
    "font-medium"
  ],
  description: [
    "parkPopover__description",

    // Typography
    "text-sm",
    "text-fg-muted"
  ],
  closeTrigger: [
    "parkPopover__closeTrigger",

    // Typography
    "text-fg-muted"
  ]
} as const satisfies Record<PopoverSlots, string | string[]>;

// * Uncomment after styling slots
// createPopoverDocs("styled", popoverStyledSlots);
