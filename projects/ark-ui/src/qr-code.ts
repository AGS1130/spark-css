// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/qr-code/qr-code.anatomy.ts

/**
 * **Qr Code**
 * @description A component that generates a QR code based on the provided data.
 * @see [source](https://ark-ui.com/vue/docs/components/qr-code#anatomy)
 */
export const slots = ["root", "frame", "pattern", "overlay", "downloadTrigger"] as const;

/**
 * **Qr Code**
 * @description A component that generates a QR code based on the provided data.
 * @see [source](https://ark-ui.com/vue/docs/components/qr-code#anatomy)
 */
export type Slots = (typeof slots)[number];
