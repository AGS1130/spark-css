// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/hover-card/index.tsx

/**
 * **Hover Card**
 * @description Allows sighted users to preview content available behind a link.
 * @see [source](https://kobalte.dev/docs/core/components/hover-card#anatomy)
 */
export const slots = ["root", "arrow", "content", "trigger"] as const;

/**
 * **Hover Card**
 * @description Allows sighted users to preview content available behind a link.
 * @see [source](https://kobalte.dev/docs/core/components/hover-card#anatomy)
 */
export type Slots = (typeof slots)[number];
