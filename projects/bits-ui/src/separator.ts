// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/separator/exports.ts
import type { SVATraits } from "jade-garden";

/**
 * **Separator**
 * @description Visually separates content or UI elements for clarity and organization.
 * @see [source](https://www.bits-ui.com/docs/components/separator#api-reference)
 */
export const slots = ["root"] as const;

/**
 * **Separator**
 * @description Visually separates content or UI elements for clarity and organization.
 * @see [source](https://www.bits-ui.com/docs/components/separator#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Separator**
 * @description Visually separates content or UI elements for clarity and organization.
 * @see [source](https://www.bits-ui.com/docs/components/separator#api-reference)
 */
export type Traits = SVATraits<Slots, { root: {} }>;
