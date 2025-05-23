// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/accordion/index.tsx
import type { SVATraits } from "jade-garden";

/**
 * **Accordion**
 * @description A vertically stacked set of interactive headings that each reveal an associated section of content.
 * @see [source](https://kobalte.dev/docs/core/components/accordion#anatomy)
 */
export const slots = ["content", "header", "item", "trigger"] as const;

/**
 * **Accordion**
 * @description A vertically stacked set of interactive headings that each reveal an associated section of content.
 * @see [source](https://kobalte.dev/docs/core/components/accordion#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Accordion**
 * @description A vertically stacked set of interactive headings that each reveal an associated section of content.
 * @see [source](https://kobalte.dev/docs/core/components/accordion#api-reference)
 */
export type Traits = SVATraits<Slots, { content: {}; header: {}; item: {}; trigger: {} }>;
