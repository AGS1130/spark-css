// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/dialog/dialog.anatomy.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Dialog**
 * @description A modal window that appears on top of the main content.
 * @see [source](https://ark-ui.com/vue/docs/components/dialog#anatomy)
 */
export const slots = ["trigger", "backdrop", "positioner", "content", "title", "description", "closeTrigger"] as const;

/**
 * **Dialog**
 * @description A modal window that appears on top of the main content.
 * @see [source](https://ark-ui.com/vue/docs/components/dialog#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Dialog**
 * @description A modal window that appears on top of the main content.
 * @see [source](https://ark-ui.com/vue/docs/components/dialog#anatomy)
 */
export type TVSlots = Record<Slots, ClassValue>;
