// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/accordion/exports.ts

/**
 * **Accordion**
 * @description Organizes content into collapsible sections, allowing users to focus on one or more sections at a time.
 * @see [source](https://www.bits-ui.com/docs/components/accordion#api-reference)
 */
export const slots = ["root", "item", "header", "trigger", "content"] as const;

/**
 * **Accordion**
 * @description Organizes content into collapsible sections, allowing users to focus on one or more sections at a time.
 * @see [source](https://www.bits-ui.com/docs/components/accordion#api-reference)
 */
export type Slots = (typeof slots)[number];
