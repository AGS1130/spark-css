// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/RangeCalendar/index.ts

/**
 * **Range Calendar**
 * @description Presents a calendar view tailored for selecting date ranges.
 * @see [source](https://reka-ui.com/docs/components/range-calendar#anatomy)
 */
export const slots = [
  "root",
  "header",
  "heading",
  "grid",
  "cell",
  "headCell",
  "next",
  "prev",
  "gridHead",
  "gridBody",
  "gridRow",
  "cellTrigger"
] as const;

/**
 * **Range Calendar**
 * @description Presents a calendar view tailored for selecting date ranges.
 * @see [source](https://reka-ui.com/docs/components/range-calendar#anatomy)
 */
export type Slots = (typeof slots)[number];
