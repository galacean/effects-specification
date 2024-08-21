import type { ItemType, PluginGyroscopeTarget, PluginType, RendererOptions } from '../type';
import type { BaseItem, EndBehavior } from './base-item';

/**
 * 插件元素
 */
export interface PluginItem extends BaseItem {
  /**
   * 元素类型（指定为 plugin）
   */
  type: ItemType.plugin,
  /**
   * 插件元素渲染信息
   */
  content: PluginContent,
  endBehavior: EndBehavior,
}

/**
 * 插件元素渲染属性
 */
export interface PluginContent {
  /**
   * 插件元素基础属性
   */
  options: PluginOption,
  /**
   * 插件元素渲染属性
   */
  renderer: RendererOptions,
}

/**
 * 插件元素基础属性
 */
export type PluginOption = PluginGyroscopeOption;

/**
 * 陀螺仪插件基础属性
 */
export interface PluginGyroscopeOption {
  /**
   * 插件类型
   */
  type: PluginType.GYROSCOPE,
  /**
   * 陀螺仪属性
   */
  targets: PluginGyroscopeTarget[],
}
