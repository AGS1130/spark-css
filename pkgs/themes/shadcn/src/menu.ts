// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/menu.ts
import {
  type MenuSlots,
  // createMenuDocs,
  createMenuSlots
} from "@spark-css/core";

/**
 * **Menu**
 * @description A list of options that appears when a user interacts with a button.
 *
 * @returns
 * ```js
 * {
 *   base: "parkMenu",
 *   arrow: "parkMenu__arrow",
 *   arrowTip: "parkMenu__arrowTip",
 *   content: "parkMenu__content",
 *   contextTrigger: "parkMenu__contextTrigger",
 *   indicator: "parkMenu__indicator",
 *   item: "parkMenu__item",
 *   itemGroup: "parkMenu__itemGroup",
 *   itemGroupLabel: "parkMenu__itemGroupLabel",
 *   itemIndicator: "parkMenu__itemIndicator",
 *   itemText: "parkMenu__itemText",
 *   positioner: "parkMenu__positioner",
 *   separator: "parkMenu__separator",
 *   trigger: "parkMenu__trigger",
 *   triggerItem: "parkMenu__triggerItem"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/menu#anatomy)
 */
export const menuSlots = createMenuSlots({ prefix: "park", caseConvention: "camel" });

// * Uncomment before styling slots
// createMenuDocs("anatomy", menuSlots);

/**
 * **Menu**
 * @description A list of options that appears when a user interacts with a button.
 *
 * @example
 * ```css
 * .parkMenu { }
 *
 * .parkMenu__arrow { }
 *
 * .parkMenu__arrowTip { }
 *
 * .parkMenu__content {
 *   (@)apply w-[calc(100% + 2rem] bg-bg-default rounded-l2 shadow-lg flex [&:is([hidden])]:hidden outline-none z-[--z-index-dropdown] flex-col [&:is([open],_[data-open],_[data-state=open])]:animate-fade-in [&:is([closed],_[data-closed],_[data-state=closed])]:animate-fade-out;
 * }
 *
 * .parkMenu__contextTrigger { }
 *
 * .parkMenu__indicator { }
 *
 * .parkMenu__item {
 *   (@)apply data-[highlighted]:bg-bg-muted rounded-l1 cursor-pointer [&:is(:disabled,_[disabled],_[data-disabled])]:cursor-not-allowed flex items-center text-sm [&_:where(svg)]:text-fg-muted [&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled font-medium transition-[background,_color] duration-150 ease-[--easings-default];
 * }
 *
 * .parkMenu__itemGroup {
 *   (@)apply flex flex-col;
 * }
 *
 * .parkMenu__itemGroupLabel {
 *   (@)apply text-sm font-semibold;
 * }
 *
 * .parkMenu__itemIndicator { }
 *
 * .parkMenu__itemText { }
 *
 * .parkMenu__positioner {
 *   (@)apply z-[--z-index-dropdown];
 * }
 *
 * .parkMenu__separator { }
 *
 * .parkMenu__trigger { }
 *
 * .parkMenu__triggerItem {
 *   (@)apply data-[highlighted]:bg-bg-muted rounded-l2 cursor-pointer [&:is(:disabled,_[disabled],_[data-disabled])]:cursor-not-allowed flex items-center text-sm [&_:where(svg)]:text-fg-muted [&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled font-medium transition-[background,_color] duration-150 ease-[--easings-default];
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/menu#anatomy)
 */
export const menuStyledSlots = {
  base: "parkMenu",
  arrow: "parkMenu__arrow",
  arrowTip: "parkMenu__arrowTip",
  content: [
    "parkMenu__content",

    // Sizing
    "w-[calc(100% + 2rem]",

    // Backgrounds
    "bg-bg-default",

    // Borders
    "rounded-l2",

    // Effects
    "shadow-lg",

    // Layout
    "flex",
    "[&:is([hidden])]:hidden",
    "outline-none",
    "z-[--z-index-dropdown]",

    // Flexbox & Grid
    "flex-col",

    // Transitions & Animation
    "[&:is([open],_[data-open],_[data-state=open])]:animate-fade-in",
    "[&:is([closed],_[data-closed],_[data-state=closed])]:animate-fade-out"
  ],
  contextTrigger: "parkMenu__contextTrigger",
  indicator: "parkMenu__indicator",
  item: [
    "parkMenu__item",

    // Backgrounds
    "data-[highlighted]:bg-bg-muted",

    // Borders
    "rounded-l1",

    // Interactivity
    "cursor-pointer",
    "[&:is(:disabled,_[disabled],_[data-disabled])]:cursor-not-allowed",

    // Layout
    "flex",

    // Flexbox & Grid
    "items-center",

    // Typography
    "text-sm",
    "[&_:where(svg)]:text-fg-muted",
    "[&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled",
    "font-medium",

    // Transitions & Animation
    "transition-[background,_color]",
    "duration-150",
    "ease-[--easings-default]"
  ],
  itemGroup: [
    "parkMenu__itemGroup",

    // Layout
    "flex",

    // Flexbox & Grid
    "flex-col"
  ],
  itemGroupLabel: [
    "parkMenu__itemGroupLabel",

    // Typography
    "text-sm",
    "font-semibold"
  ],
  itemIndicator: "parkMenu__itemIndicator",
  itemText: "parkMenu__itemText",
  positioner: [
    "parkMenu__positioner",

    // Layout
    "z-[--z-index-dropdown]"
  ],
  separator: "parkMenu__separator",
  trigger: "parkMenu__trigger",
  triggerItem: [
    "parkMenu__triggerItem",

    // Backgrounds
    "data-[highlighted]:bg-bg-muted",

    // Borders
    "rounded-l2",

    // Interactivity
    "cursor-pointer",
    "[&:is(:disabled,_[disabled],_[data-disabled])]:cursor-not-allowed",

    // Layout
    "flex",

    // Flexbox & Grid
    "items-center",

    // Typography
    "text-sm",
    "[&_:where(svg)]:text-fg-muted",
    "[&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled",
    "font-medium",

    // Transitions & Animation
    "transition-[background,_color]",
    "duration-150",
    "ease-[--easings-default]"
  ]
} as const satisfies Record<MenuSlots, string | string[]>;

// * Uncomment after styling slots
// createMenuDocs("styled", menuStyledSlots);
