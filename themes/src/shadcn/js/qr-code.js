// * https://github.com/chakra-ui/ark/tree/main/website/src/demos/qr-code.demo.tsx
import { createSlots } from "@spark-css/core/qr-code";
/**
 * **Qr Code**
 * @description A component that generates a QR code based on the provided data.
 *
 * @returns
 * ```js
 * {
 *   base: "parkQrCode",
 *   root: "parkQrCode__root",
 *   frame: "parkQrCode__frame",
 *   pattern: "parkQrCode__pattern",
 *   overlay: "parkQrCode__overlay",
 *   downloadTrigger: "parkQrCode__downloadTrigger"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/qr-code#anatomy)
 */
const slots = createSlots({ prefix: "park", caseConvention: "camel" });
/**
 * @typedef { import("@spark-css/core/qr-code").Slots } Slots
 * @type { Record<Slots, string | string[]> }
 */
const styledSlots = {
  base: slots.base,
  root: [
    slots.root,
    // Sizing
    "w-fit"
  ],
  frame: [
    slots.frame,
    // Sizing
    "size-32",
    // Backgrounds
    "bg-white"
  ],
  pattern: [
    slots.pattern,
    // SVG
    "fill-black"
  ],
  overlay: [
    slots.overlay,
    // Sizing
    "size-9",
    // Borders
    "rounded-full",
    // Layout
    "outline",
    "outline-2",
    "outline-white"
  ],
  downloadTrigger: slots.downloadTrigger
};
/**
 * **Qr Code**
 * @description A component that generates a QR code based on the provided data.
 *
 * @example
 * ```css
 * .parkQrCode { }
 *
 * .parkQrCode__root {
 *   (@)apply w-fit;
 * }
 *
 * .parkQrCode__frame {
 *   (@)apply size-32 bg-white;
 * }
 *
 * .parkQrCode__pattern {
 *   (@)apply fill-black;
 * }
 *
 * .parkQrCode__overlay {
 *   (@)apply size-9 rounded-full outline outline-2 outline-white;
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/qr-code#anatomy)
 */
export const qrCodeStyles = styledSlots;
