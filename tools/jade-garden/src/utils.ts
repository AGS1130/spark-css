import { kebabCase } from "es-toolkit";
import { cx } from "./class-utils";
import type { MergeClassFn } from "./types";

/* ===================== Utils ===================== */

/**
 * Converts a boolean to its string representation ("true" or "false"), or returns the value as is.
 * Treats 0 as "0".
 *
 * @template T - The type of the value.
 * @param {T} value - The value to convert.
 * @returns {string | T} - The string representation of the boolean, or the original value.
 */
const falsyToString = <T>(value: T): string | T =>
  typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;

/**
 * Returns the class names for the `raw` method in `cva` and `sva` functions.
 * Constructs a raw class name based on the component's name, slot, and variants.
 *
 * @param {object} options - The options object.
 * @param {Record<string, any> | undefined} options.compoundVariants - The compound variants object.
 * @param {string | undefined} options.name - The component name.
 * @param {Record<string, any> | undefined} options.props - The props object.
 * @param {Record<string, any> | undefined} options.variants - The variants object.
 * @param {string | undefined} [options.slotKey] - The slot key (for `sva`).
 * @param {Record<string, any> | undefined} [options.slotProps] - The slot props (for `sva`).
 * @returns {string} A string of raw class names.
 */
export const getRawClasses = (options: {
  compoundVariants: Record<string, any> | undefined;
  name: string | undefined;
  props: Record<string, any> | undefined;
  variants: Record<string, any> | undefined;
  slotKey?: string;
  slotProps?: Record<string, any>;
}): string => {
  const { compoundVariants, name, props, slotKey, slotProps, variants } = options;
  if (!name) return cx(props?.["class"], props?.["className"]);

  // * "prefix-name--slot"
  const prefix = `${kebabCase(name)}${slotKey ? `--${kebabCase(slotKey)}` : ""}`;

  // * Exit early if variants do not exist or is not an object
  if (typeof variants !== "object" || (typeof variants === "object" && Array.isArray(variants))) {
    return cx(prefix, props?.["class"], props?.["className"]);
  }

  let result = prefix;

  for (const variant of Object.keys(variants)) {
    const variantObj = (variants as Record<string, any>)[variant];
    if (!variantObj || typeof variantObj !== "object" || Object.keys(variantObj).length === 0) continue;

    const variantKey = slotProps?.[variant] ?? props?.[variant] ?? compoundVariants?.[variant];

    // * "__variant--variantKey"
    const suffix = variant ? `__${kebabCase(variant)}${variantKey ? `--${kebabCase(variantKey)}` : ""}` : "";

    // * "prefix-name--slot__variant--variantKey"
    result += ` ${prefix}${suffix}`;
  }

  return cx(result, props?.["class"], props?.["className"]);
};

/**
 * Retrieves variant classes based on provided configuration and props.
 *
 * @param {object} options - The options object.
 * @param {Record<string, any> | undefined} options.defaultVariants - The default variants object.
 * @param {MergeClassFn} options.mergeClass - The function to merge class names.
 * @param {Record<string, any> | undefined} options.props - The props object.
 * @param {Record<string, any> | undefined} options.variants - The variants object.
 * @param {string | undefined} [options.slotKey] - The slot key (for `sva`).
 * @param {Record<string, any> | undefined} [options.slotProps] - The slot props (for `sva`).
 * @returns {string} A string of variant class names.
 */
export const getVariantClasses = (options: {
  defaultVariants: Record<string, any> | undefined;
  mergeClass: MergeClassFn;
  props: Record<string, any> | undefined;
  variants: Record<string, any> | undefined;
  slotKey?: string;
  slotProps?: Record<string, any>;
}): string => {
  const { defaultVariants, mergeClass, props, slotKey, slotProps, variants } = options;
  if (!variants || typeof variants !== "object" || Array.isArray(variants)) return "";

  let result = "";

  for (const variant of Object.keys(variants)) {
    const variantObj = (variants as Record<string, any>)[variant];
    if (!variantObj || typeof variantObj !== "object" || Object.keys(variantObj).length === 0) continue;

    const variantKey = slotProps?.[variant] ?? props?.[variant] ?? defaultVariants?.[variant];
    const validKey = variantKey !== undefined ? falsyToString(variantKey) : variantKey;
    const value = slotKey ? mergeClass(variantObj[validKey ?? "false"]?.[slotKey]) : mergeClass(variantObj[validKey]);

    if (value) result += result.length === 0 ? value : ` ${value}`;
  }

  return result;
};

/**
 * Checks if a given configuration object matches the provided props.
 *
 * @param {Record<string, unknown>} config - The configuration object.
 * @param {Record<string, unknown>} props - The props object.
 * @returns {boolean} True if the configuration matches the props, false otherwise.
 */
export const hasProps = (config: Record<string, unknown>, props: Record<string, unknown>): boolean => {
  let isValid = true;

  for (const key of Object.keys(config)) {
    const value = config[key];
    const isArray = Array.isArray(value);
    const propValue = props[key];

    if ((isArray && !value.includes(propValue)) || (!isArray && value !== propValue)) {
      isValid = false;
      break;
    }
  }

  return isValid;
};
