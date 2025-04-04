// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/NavigationMenu/index.ts

/**
 * **Navigation Menu**
 * @description A collection of links for navigating websites.
 * @see [source](https://reka-ui.com/docs/components/navigation-menu#anatomy)
 */
export const slots = ["root", "content", "indicator", "item", "link", "list", "sub", "trigger", "viewport"] as const;

/**
 * **Navigation Menu**
 * @description A collection of links for navigating websites.
 * @see [source](https://reka-ui.com/docs/components/navigation-menu#anatomy)
 */
export type Slots = (typeof slots)[number];
