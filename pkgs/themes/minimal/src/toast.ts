import { type ToastSlots, createToastSlots } from "@spark-css/core";
// import { generateSlotsDocs, generateStyledSlotsDocs } from "@spark-css/utils";

/**
 * **Toast**
 * @description A message that appears on the screen to provide feedback on an action.
 *
 * @returns
 * ```js
 * {
 *   base: "toast",
 *   group: "toast__group",
 *   root: "toast__root",
 *   title: "toast__title",
 *   description: "toast__description",
 *   actionTrigger: "toast__action-trigger",
 *   closeTrigger: "toast__close-trigger"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/toast#anatomy)
 */
export const toastSlots = createToastSlots({});

// * Uncomment before styling slots
// console.log(generateSlotsDocs("toast", toastSlots));

/**
 * **Toast**
 * @description A message that appears on the screen to provide feedback on an action.
 *
 * @example
 * ```css
 * .toast { }
 *
 * .toast__group { }
 *
 * .toast__root { }
 *
 * .toast__title { }
 *
 * .toast__description { }
 *
 * .toast__action-trigger { }
 *
 * .toast__close-trigger { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/toast#anatomy)
 */
export const toastStyledSlots = {
  base: "toast",
  group: "toast__group",
  root: "toast__root",
  title: "toast__title",
  description: "toast__description",
  actionTrigger: "toast__action-trigger",
  closeTrigger: "toast__close-trigger"
} as const satisfies Record<ToastSlots, string | string[]>;

// * Uncomment after styling slots
// console.log(generateStyledSlotsDocs("toast", toastStyledSlots));