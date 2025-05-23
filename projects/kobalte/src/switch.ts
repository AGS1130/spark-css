// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/switch/index.tsx
import type { SVATraits } from "jade-garden";

/**
 * **Switch**
 * @description A control that allows users to choose one of two values: on or off.
 * @see [source](https://kobalte.dev/docs/core/components/switch#anatomy)
 */
export const slots = ["control", "description", "errorMessage", "input", "label", "thumb"] as const;

/**
 * **Switch**
 * @description A control that allows users to choose one of two values: on or off.
 * @see [source](https://kobalte.dev/docs/core/components/switch#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Switch**
 * @description A control that allows users to choose one of two values: on or off.
 * @see [source](https://kobalte.dev/docs/core/components/switch#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  { control: {}; description: {}; errorMessage: {}; input: {}; label: {}; thumb: {} }
>;
