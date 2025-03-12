// * https://github.com/radix-ui/primitives/blob/main/packages/react/tabs/src/index.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Tabs**
 * @description A set of layered sections of content—known as tab panels—that are displayed one at a time.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/tabs#anatomy)
 */
export const slots = ["content", "list", "root", "trigger"] as const;

/**
 * **Tabs**
 * @description A set of layered sections of content—known as tab panels—that are displayed one at a time.
 * @see [source](https://www.radix-ui.com/primitives/docs/components/tabs#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
