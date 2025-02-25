// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/radio-group.ts
import { createSlots } from "@spark-css/core/radio-group";
/**
 * **Radio Group**
 * @description Allows single selection from multiple options.
 *
 * @returns
 * ```js
 * {
 *   base: "parkRadioGroup",
 *   root: "parkRadioGroup__root",
 *   label: "parkRadioGroup__label",
 *   item: "parkRadioGroup__item",
 *   itemText: "parkRadioGroup__itemText",
 *   itemControl: "parkRadioGroup__itemControl",
 *   indicator: "parkRadioGroup__indicator"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/radio-group#anatomy)
 */
const slots = createSlots({ prefix: "park", caseConvention: "camel" });
/**
 * @typedef { import("@spark-css/core/radio-group").Slots } Slots
 * @type { Record<Slots, string | string[]> }
 */
const styledSlots = {
  base: slots.base,
  root: [
    slots.root,
    // Layout
    "flex",
    // Flexbox & Grid
    "data-[orientation=horizontal]:flex-row",
    "data-[orientation=vertical]:flex-col"
  ],
  label: slots.label,
  item: [
    slots.item,
    // Interactivity
    "cursor-pointer",
    "[&:is(:disabled,_[disabled],_[data-disabled])]:cursor-not-allowed",
    // Layout
    "flex",
    // Flexbox & Grid
    "items-center"
  ],
  itemText: [
    slots.itemText,
    // Typography
    "text-fg-default",
    "[&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled",
    "font-medium"
  ],
  itemControl: [
    slots.itemControl,
    // Backgrounds
    "bg-transparent",
    "[&:is(:checked,_[data-checked],_[aria-checked=true],_[data-state=checked])]:bg-[--colors-color-palette-default]",
    // Borders
    "rounded-full",
    "border",
    "border-border-default",
    "[&:is(:disabled,_[disabled],_[data-disabled])]:border-border-disabled",
    "[&:is(:checked,_[data-checked],_[aria-checked=true],_[data-state=checked])]:border-[--colors-color-palette-default]",
    // Layout
    "outline",
    "outline-bg-default",
    // Typography
    "[&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled",
    // Transitions & Animation
    "transition-[background]",
    "duration-200",
    "ease-[--easings-default]"
  ],
  indicator: slots.indicator
};
/**
 * **Radio Group**
 * @description Allows single selection from multiple options.
 *
 * @example
 * ```css
 * .parkRadioGroup { }
 *
 * .parkRadioGroup__root {
 *   (@)apply flex data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col;
 * }
 *
 * .parkRadioGroup__label { }
 *
 * .parkRadioGroup__item {
 *   (@)apply cursor-pointer [&:is(:disabled,_[disabled],_[data-disabled])]:cursor-not-allowed flex items-center;
 * }
 *
 * .parkRadioGroup__itemText {
 *   (@)apply text-fg-default [&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled font-medium;
 * }
 *
 * .parkRadioGroup__itemControl {
 *   (@)apply bg-transparent [&:is(:checked,_[data-checked],_[aria-checked=true],_[data-state=checked])]:bg-[--colors-color-palette-default] rounded-full border border-border-default [&:is(:disabled,_[disabled],_[data-disabled])]:border-border-disabled [&:is(:checked,_[data-checked],_[aria-checked=true],_[data-state=checked])]:border-[--colors-color-palette-default] outline outline-bg-default [&:is(:disabled,_[disabled],_[data-disabled])]:text-fg-disabled transition-[background] duration-200 ease-[--easings-default];
 * }
 *
 * .parkRadioGroup__indicator { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/radio-group#anatomy)
 */
export const radioGroupStyles = styledSlots;
