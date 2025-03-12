// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/toast/toast.anatomy.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Toast**
 * @description A message that appears on the screen to provide feedback on an action.
 * @see [source](https://ark-ui.com/vue/docs/components/toast#anatomy)
 */
export const slots = ["root", "actionTrigger", "title", "description", "group", "closeTrigger"] as const;

/**
 * **Toast**
 * @description A message that appears on the screen to provide feedback on an action.
 * @see [source](https://ark-ui.com/vue/docs/components/toast#anatomy)
 */
export type Slots = (typeof slots)[number];

export type TVSlots = Record<Slots, ClassValue>;
