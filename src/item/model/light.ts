import type { RGBAColorValue } from '../../numberExpression';
import type { BaseItem, ItemEndBehavior } from '../base-item';
import type { RotationOverLifetime, PositionOverLifetime, ItemType } from '../../type';

export interface ModelLightBaseOptions {
  /**
   * 挂靠的父节点
   */
  parent?: number,
  /**
   * 灯光颜色，线性空间
   * @default [255,255,255]
   */
  color: RGBAColorValue,
  /**
   * 灯光强度
   * @default 1
   */
  intensity: number,
}

// 点光源
export interface ModelLightPointOptions extends ModelLightBaseOptions {
  lightType: 'point',
  /**
   * @default Infinity
   */
  range: number,
}

// 聚光灯
export interface ModelLightSpotOptions extends ModelLightBaseOptions {
  lightType: 'spot',
  /**
   * @default Infinity
   */
  range: number,
  /**
   * @default 0
   */
  innerConeAngle: number,
  /**
   * 默认值45度，PI/4
   * @default 45
   */
  outerConeAngle: number,
}

// 方向光
export interface ModelLightDirOptions extends ModelLightBaseOptions {
  lightType: 'directional',
}

// 环境光
export interface ModelAmbientLightOptions extends ModelLightBaseOptions {
  lightType: 'ambient',
}

export type ModelLightOptions =
  | ModelLightPointOptions
  | ModelLightDirOptions
  | ModelLightSpotOptions
  | ModelAmbientLightOptions;

export interface ModelLightContent {
  /**
   * 灯光元素基础属性
   */
  options: ModelLightOptions,
  /**
   * 灯光元素旋转变化属性
   */
  rotationOverLifetime?: RotationOverLifetime,
  /**
   * 灯光元素位置变化属性
   */
  positionOverLifetime?: PositionOverLifetime,
}

/**
 * 灯光元素
 */
export interface ModelLightItem extends BaseItem {
  type: ItemType.light,
  pluginName: 'model',
  content: ModelLightContent,
  endBehavior: ItemEndBehavior,
}
