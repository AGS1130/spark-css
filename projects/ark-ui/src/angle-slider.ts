// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/angle-slider/angle-slider.anatomy.ts
import type { SVATraits } from "jade-garden";

/**
 * **Angle Slider**
 * @description A component for selecting a value within a circular range.
 * @see [source](https://ark-ui.com/docs/components/angle-slider#anatomy)
 */
export const slots = ["root", "label", "thumb", "valueText", "control", "track", "markerGroup", "marker"] as const;

/**
 * **Angle Slider**
 * @description A component for selecting a value within a circular range.
 * @see [source](https://ark-ui.com/docs/components/angle-slider#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Angle Slider**
 * @description A component for selecting a value within a circular range.
 * @see [source](https://ark-ui.com/docs/components/angle-slider#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    root: {
      scope: "angle-slider";
      part: "root";
      disabled: "";
      invalid: "";
      readonly: "";
    };
    label: {
      scope: "angle-slider";
      part: "label";
      disabled: "";
      invalid: "";
      readonly: "";
    };
    thumb: {
      scope: "angle-slider";
      part: "thumb";
      disabled: "";
      invalid: "";
      readonly: "";
    };
    control: {
      scope: "angle-slider";
      part: "control";
      disabled: "";
      invalid: "";
      readonly: "";
    };
    marker: {
      scope: "angle-slider";
      part: "marker";
      value: "";
      state: "";
      disabled: "";
    };
  }
>;
