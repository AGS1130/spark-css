// * https://github.com/mui/base-ui/blob/master/packages/react/src/accordion/index.parts.ts
import type { SVATraits } from "jade-garden";

/**
 * **Accordion**
 * @description A set of collapsible panels with headings.
 * @see [source](https://base-ui.com/react/components/accordion#api-reference)
 */
export const slots = ["header", "item", "panel", "root", "trigger"] as const;

/**
 * **Accordion**
 * @description A set of collapsible panels with headings.
 * @see [source](https://base-ui.com/react/components/accordion#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Accordion**
 * @description A set of collapsible panels with headings.
 * @see [source](https://base-ui.com/react/components/accordion#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    header: {
      open: "";
      disabled: "";
      index: "number";
    };
    item: {
      open: "";
      disabled: "";
      index: "number";
    };
    panel: {
      open: "";
      orientation: "horizontal" | "vertical";
      disabled: "";
      index: "number";
      "starting-style": "";
      "ending-style": "";
    };
    root: {
      orientation: "horizontal" | "vertical";
      disabled: "";
    };
    trigger: {
      "panel-open": "";
      disabled: "";
    };
  }
>;
