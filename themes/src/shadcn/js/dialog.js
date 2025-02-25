// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/dialog.ts
import { createSlots } from "@spark-css/core/dialog";
/**
 * **Dialog**
 * @description A modal window that appears on top of the main content.
 *
 * @returns
 * ```js
 * {
 *   base: "parkDialog",
 *   trigger: "parkDialog__trigger",
 *   backdrop: "parkDialog__backdrop",
 *   positioner: "parkDialog__positioner",
 *   content: "parkDialog__content",
 *   title: "parkDialog__title",
 *   description: "parkDialog__description",
 *   closeTrigger: "parkDialog__closeTrigger"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/dialog#anatomy)
 */
const slots = createSlots({ prefix: "park", caseConvention: "camel" });
/**
 * @typedef { import("@spark-css/core/dialog").Slots } Slots
 * @type { Record<Slots, string | string[]> }
 */
const styledSlots = {
  base: slots.base,
  trigger: slots.trigger,
  backdrop: [
    slots.backdrop,
    // Sizing
    "h-screen",
    "w-screen",
    // Backgrounds
    "bg-white-a10",
    "dark:bg-black-a10",
    // Layout
    "fixed",
    "left-0",
    "top-0",
    "z-[--z-index-overlay]",
    // Filters
    "backdrop-blur-sm",
    // Transitions & Animation
    "[&:is([open],_[data-open],_[data-state=open])]:animate-[--animations-backdrop-in]",
    "[&:is([closed],_[data-closed],_[data-state=closed])]:animate-[--animations-backdrop-out]"
  ],
  positioner: [
    slots.positioner,
    // Sizing
    "h-dvh",
    "w-screen",
    // Layout
    "flex",
    "overflow-auto",
    "fixed",
    "left-0",
    "top-0",
    "z-[--z-index-modal]",
    // Flexbox & Grid
    "items-center",
    "justify-center"
  ],
  content: [
    slots.content,
    // Sizing
    "min-w-96",
    // Backgrounds
    "bg-bg-default",
    // Borders
    "rounded-l3",
    // Effects
    "shadow-lg",
    // Layout
    "relative",
    // Transitions & Animation
    "[&:is([open],_[data-open],_[data-state=open])]:animate-[--animations-dialog-in]",
    "[&:is([closed],_[data-closed],_[data-state=closed])]:animate-[--animations-dialog-out]"
  ],
  title: [
    slots.title,
    // Typography
    "text-lg",
    "font-semibold"
  ],
  description: [
    slots.description,
    // Typography
    "text-fg-muted",
    "text-sm"
  ],
  closeTrigger: slots.closeTrigger
};
/**
 * **Dialog**
 * @description A modal window that appears on top of the main content.
 *
 * @example
 * ```css
 * .parkDialog { }
 *
 * .parkDialog__trigger { }
 *
 * .parkDialog__backdrop {
 *   (@)apply h-screen w-screen bg-white-a10 dark:bg-black-a10 fixed left-0 top-0 z-[--z-index-overlay] backdrop-blur-sm [&:is([open],_[data-open],_[data-state=open])]:animate-[--animations-backdrop-in] [&:is([closed],_[data-closed],_[data-state=closed])]:animate-[--animations-backdrop-out];
 * }
 *
 * .parkDialog__positioner {
 *   (@)apply h-dvh w-screen flex overflow-auto fixed left-0 top-0 z-[--z-index-modal] items-center justify-center;
 * }
 *
 * .parkDialog__content {
 *   (@)apply min-w-96 bg-bg-default rounded-l3 shadow-lg relative [&:is([open],_[data-open],_[data-state=open])]:animate-[--animations-dialog-in] [&:is([closed],_[data-closed],_[data-state=closed])]:animate-[--animations-dialog-out];
 * }
 *
 * .parkDialog__title {
 *   (@)apply text-lg font-semibold;
 * }
 *
 * .parkDialog__description {
 *   (@)apply text-fg-muted text-sm;
 * }
 *
 * .parkDialog__closeTrigger { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/dialog#anatomy)
 */
export const dialogStyles = styledSlots;
