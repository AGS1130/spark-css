import {
  type AccordionSlots,
  // createAccordionDocs,
  createAccordionSlots
} from "@spark-css/core";

/**
 * **Accordion**
 * @description A collapsible component for displaying content in a vertical stack.
 *
 * @returns
 * ```js
 * {
 *   base: "accordion",
 *   root: "accordion__root",
 *   item: "accordion__item",
 *   itemTrigger: "accordion__item-trigger",
 *   itemContent: "accordion__item-content",
 *   itemIndicator: "accordion__item-indicator"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/accordion#anatomy)
 */
export const accordionSlots = createAccordionSlots({});

// * Uncomment before styling slots
// createAccordionDocs("anatomy", accordionSlots);

/**
 * **Accordion**
 * @description A collapsible component for displaying content in a vertical stack.
 *
 * @example
 * ```css
 * .accordion { }
 *
 * .accordion__root { }
 *
 * .accordion__item { }
 *
 * .accordion__item-trigger { }
 *
 * .accordion__item-content { }
 *
 * .accordion__item-indicator { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/accordion#anatomy)
 */
export const accordionStyledSlots = {
  base: "accordion",
  root: "accordion__root",
  item: "accordion__item",
  itemTrigger: "accordion__item-trigger",
  itemContent: "accordion__item-content",
  itemIndicator: "accordion__item-indicator"
} as const satisfies Record<AccordionSlots, string | string[]>;

// * Uncomment after styling slots
// createAccordionDocs("styled", accordionStyledSlots);
