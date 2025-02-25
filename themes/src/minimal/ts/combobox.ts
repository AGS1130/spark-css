import { type Slots, createSlots } from "@spark-css/core/combobox";

/**
 * **Combobox**
 * @description A single input field that combines the functionality of a select and input.
 *
 * @returns
 * ```js
 * {
 *   base: "combobox",
 *   root: "combobox__root",
 *   clearTrigger: "combobox__clear-trigger",
 *   content: "combobox__content",
 *   control: "combobox__control",
 *   input: "combobox__input",
 *   item: "combobox__item",
 *   itemGroup: "combobox__item-group",
 *   itemGroupLabel: "combobox__item-group-label",
 *   itemIndicator: "combobox__item-indicator",
 *   itemText: "combobox__item-text",
 *   label: "combobox__label",
 *   list: "combobox__list",
 *   positioner: "combobox__positioner",
 *   trigger: "combobox__trigger"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/combobox#anatomy)
 */
const slots = createSlots({});

/**
 * @typedef { import("@spark-css/core/combobox").Slots } Slots
 * @type { Record<Slots, string | string[]> }
 */
const styledSlots = {
  base: slots.base,
  root: slots.root,
  clearTrigger: slots.clearTrigger,
  content: slots.content,
  control: slots.control,
  input: slots.input,
  item: slots.item,
  itemGroup: slots.itemGroup,
  itemGroupLabel: slots.itemGroupLabel,
  itemIndicator: slots.itemIndicator,
  itemText: slots.itemText,
  label: slots.label,
  list: slots.list,
  positioner: slots.positioner,
  trigger: slots.trigger
} satisfies Record<Slots, string | string[]>;

/**
 * **Combobox**
 * @description A single input field that combines the functionality of a select and input.
 *
 * @example
 * ```css
 * .combobox { }
 *
 * .combobox__root { }
 *
 * .combobox__clear-trigger { }
 *
 * .combobox__content { }
 *
 * .combobox__control { }
 *
 * .combobox__input { }
 *
 * .combobox__item { }
 *
 * .combobox__item-group { }
 *
 * .combobox__item-group-label { }
 *
 * .combobox__item-indicator { }
 *
 * .combobox__item-text { }
 *
 * .combobox__label { }
 *
 * .combobox__list { }
 *
 * .combobox__positioner { }
 *
 * .combobox__trigger { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/combobox#anatomy)
 */
export const comboboxStyles = styledSlots;
