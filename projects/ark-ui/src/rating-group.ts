// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/rating-group/rating-group.anatomy.ts
import type { SVATraits } from "jade-garden";

/**
 * **Rating Group**
 * @description Allows users to rate items using a set of icons.
 * @see [source](https://ark-ui.com/docs/components/rating-group#anatomy)
 */
export const slots = ["root", "label", "item", "control"] as const;

/**
 * **Rating Group**
 * @description Allows users to rate items using a set of icons.
 * @see [source](https://ark-ui.com/docs/components/rating-group#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Rating Group**
 * @description Allows users to rate items using a set of icons.
 * @see [source](https://ark-ui.com/docs/components/rating-group#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    label: {
      scope: "rating-group";
      part: "label";
      disabled: "";
    };
    item: {
      scope: "rating-group";
      part: "item";
      disabled: "";
      readonly: "";
      checked: "";
      highlighted: "";
      half: "";
    };
    control: {
      scope: "rating-group";
      part: "control";
      readonly: "";
      disabled: "";
    };
  }
>;
