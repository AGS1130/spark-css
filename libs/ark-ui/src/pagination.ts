// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/pagination/pagination.anatomy.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Pagination**
 * @description A navigation component that allows users to browse through pages.
 * @see [source](https://ark-ui.com/vue/docs/components/pagination#anatomy)
 */
export const slots = ["root", "item", "ellipsis", "prevTrigger", "nextTrigger"] as const;

/**
 * **Pagination**
 * @description A navigation component that allows users to browse through pages.
 * @see [source](https://ark-ui.com/vue/docs/components/pagination#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Pagination**
 * @description A navigation component that allows users to browse through pages.
 * @see [source](https://ark-ui.com/vue/docs/components/pagination#anatomy)
 */
export type TVSlots = Record<Slots, ClassValue>;
