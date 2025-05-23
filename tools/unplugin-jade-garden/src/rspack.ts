import { type RspackPluginInstance, createRspackPlugin } from "unplugin";
import { type PluginInstance, factory } from "./core";

/**
 * Rspack plugin
 *
 * @example
 * ```js
 * // rspack.config.js
 * import jadeGardenPlugin from "unplugin-jade-garden/rspack";
 *
 * default export {
 *  plugins: [jadeGardenPlugin()]
 * }
 * ```
 */
const plugin: PluginInstance<RspackPluginInstance> = createRspackPlugin(factory);
export default plugin;
