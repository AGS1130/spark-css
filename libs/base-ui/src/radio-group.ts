// * https://github.com/mui/base-ui/blob/master/packages/react/src/radio-group/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Radio Group**
 * @description An easily stylable radio button component.
 * @see [source](https://base-ui.com/react/components/radio#api-reference)
 */
export const slots = ["root"];

/**
 * **Radio Group**
 * @description An easily stylable radio button component.
 * @see [source](https://base-ui.com/react/components/radio#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Radio Group**
 * @description An easily stylable radio button component.
 * @see [source](https://base-ui.com/react/components/radio#api-reference)
 */
export type TVSlots = Record<Slots, ClassValue>;
