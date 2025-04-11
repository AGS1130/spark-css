// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/color-swatch/index.tsx

/**
 * **Color Swatch**
 * @description Displays a preview of a selected color.
 * @see [source](https://kobalte.dev/docs/core/components/color-swatch#anatomy)
 */
export const slots = ["root"] as const;

/**
 * **Color Swatch**
 * @description Displays a preview of a selected color.
 * @see [source](https://kobalte.dev/docs/core/components/color-swatch#anatomy)
 */
export type Slots = (typeof slots)[number];
