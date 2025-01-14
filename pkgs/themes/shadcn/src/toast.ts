// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/toast.ts
import {
  type ToastSlots,
  // createToastDocs,
  createToastSlots
} from "@spark-css/core";

/**
 * **Toast**
 * @description A message that appears on the screen to provide feedback on an action.
 *
 * @returns
 * ```js
 * {
 *   base: "parkToast",
 *   group: "parkToast__group",
 *   root: "parkToast__root",
 *   title: "parkToast__title",
 *   description: "parkToast__description",
 *   actionTrigger: "parkToast__actionTrigger",
 *   closeTrigger: "parkToast__closeTrigger"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/toast#anatomy)
 */
export const toastSlots = createToastSlots({ prefix: "park", caseConvention: "camel" });

// * Uncomment before styling slots
// createToastDocs("anatomy", toastSlots);

/**
 * **Toast**
 * @description A message that appears on the screen to provide feedback on an action.
 *
 * @example
 * ```css
 * .parkToast { }
 *
 * .parkToast__group { }
 *
 * .parkToast__root {
 *   (@)apply p-4 min-w-80 bg-bg-default rounded-l3 shadow-lg will-change-[translate,_opacity,_scale] relative [overflow-wrap:anywhere] transition-[translate,_scale,_opacity,_height] duration-300 ease-[--easings-default];
 * }
 *
 * .parkToast__title {
 *   (@)apply text-fg-default text-sm font-semibold;
 * }
 *
 * .parkToast__description {
 *   (@)apply text-fg-muted text-sm;
 * }
 *
 * .parkToast__actionTrigger {
 *   (@)apply mt-2;
 * }
 *
 * .parkToast__closeTrigger {
 *   (@)apply absolute top-3 right-3;
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/toast#anatomy)
 */
export const toastStyledSlots = {
  base: "parkToast",
  group: "parkToast__group",
  root: [
    "parkToast__root",

    // Spacing
    "p-4",

    // Sizing
    "min-w-80",

    // Backgrounds
    "bg-bg-default",

    // Borders
    "rounded-l3",

    // Effects
    "shadow-lg",

    // Interactivity
    "will-change-[translate,_opacity,_scale]",

    // Layout
    "relative",

    // Typography
    "[overflow-wrap:anywhere]",

    // Transitions & Animation
    "transition-[translate,_scale,_opacity,_height]",
    "duration-300",
    "ease-[--easings-default]"
  ],
  title: [
    "parkToast__title",

    // Typography
    "text-fg-default",
    "text-sm",
    "font-semibold"
  ],
  description: [
    "parkToast__description",

    // Typography
    "text-fg-muted",
    "text-sm"
  ],
  actionTrigger: [
    "parkToast__actionTrigger",

    // Spacing
    "mt-2"
  ],
  closeTrigger: [
    "parkToast__closeTrigger",

    // Layout
    "absolute",
    "top-3",
    "right-3"
  ]
} as const satisfies Record<ToastSlots, string | string[]>;

// * Uncomment after styling slots
// createToastDocs("styled", toastStyledSlots);
