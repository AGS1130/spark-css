import { createSlots } from "@spark-css/core/toast";
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
const slots = createSlots({});
/**
 * @typedef { import("@spark-css/core/toast").Slots } Slots
 * @type { Record<Slots, string | string[]> }
 */
const styledSlots = {
  base: slots.base,
  group: slots.group,
  root: slots.root,
  title: slots.title,
  description: slots.description,
  actionTrigger: slots.actionTrigger,
  closeTrigger: slots.closeTrigger
};
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
export const toastStyles = styledSlots;
