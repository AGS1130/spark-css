import { type WebpackPluginInstance, createWebpackPlugin } from "unplugin";
import { type PluginInstance, factory } from "./core";

/**
 * Webpack plugin
 *
 * @example
 * ```js
 * // webpack.config.js
 * import jadeGardenPlugin from "@jade-garden/webpack";
 *
 * default export {
 *  plugins: [jadeGardenPlugin()]
 * }
 * ```
 */
const plugin: PluginInstance<WebpackPluginInstance> = createWebpackPlugin(factory);
export default plugin;
export { plugin as "module.exports" };
