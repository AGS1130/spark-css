import {
  type StepsSlots,
  // createStepsDocs,
  createStepsSlots
} from "@spark-css/core";

/**
 * **Steps**
 * @description Used to guide users through a series of steps in a process.
 *
 * @returns
 * ```js
 * {
 *   base: "steps",
 *   root: "steps__root",
 *   list: "steps__list",
 *   item: "steps__item",
 *   trigger: "steps__trigger",
 *   indicator: "steps__indicator",
 *   separator: "steps__separator",
 *   content: "steps__content",
 *   nextTrigger: "steps__next-trigger",
 *   prevTrigger: "steps__prev-trigger",
 *   progress: "steps__progress"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/steps#anatomy)
 */
export const stepsSlots = createStepsSlots({});

// * Uncomment before styling slots
// createStepsDocs("anatomy", stepsSlots);

/**
 * **Steps**
 * @description Used to guide users through a series of steps in a process.
 *
 * @example
 * ```css
 * .steps { }
 *
 * .steps__root { }
 *
 * .steps__list { }
 *
 * .steps__item { }
 *
 * .steps__trigger { }
 *
 * .steps__indicator { }
 *
 * .steps__separator { }
 *
 * .steps__content { }
 *
 * .steps__next-trigger { }
 *
 * .steps__prev-trigger { }
 *
 * .steps__progress { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/steps#anatomy)
 */
export const stepsStyledSlots = {
  base: "steps",
  root: "steps__root",
  list: "steps__list",
  item: "steps__item",
  trigger: "steps__trigger",
  indicator: "steps__indicator",
  separator: "steps__separator",
  content: "steps__content",
  nextTrigger: "steps__next-trigger",
  prevTrigger: "steps__prev-trigger",
  progress: "steps__progress"
} as const satisfies Record<StepsSlots, string | string[]>;

// * Uncomment after styling slots
// createStepsDocs("styled", stepsStyledSlots);
