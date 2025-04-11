// * Workaround to prevent types from being exposed to developers in "jade-garden"
import type { CVAMethods, Variant } from "../../../jade-garden/src/cva";
import type { DefaultVariants, SVAMethods, SVAVariants, Slots } from "../../../jade-garden/src/sva";

/* ==================== Types ==================== */

export type CVA = CVAMethods<Variant>;

export type Options = {
  /**
   * The entry for the main CSS/Tailwind file
   *
   * *NOTE*: This should be in a directory like `css` or `styles`
   */
  entry?: string;
  // compile?: boolean;
  /**
   * The "cva" and "sva" instances from Jade Garden
   */
  components?: {
    cva?: CVA[];
    sva?: SVA[];
  };
};

export type PluginInstance<T> = (options?: Options | undefined) => T;

export type SVA = SVAMethods<Slots, SVAVariants<Slots, DefaultVariants<Slots>>>;
