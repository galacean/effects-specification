import type { ComponentData, DataPath } from '../components';
import type { ItemType, PositionOverLifetime, RotationOverLifetime, SizeOverLifetime } from '../type';
import type { BaseItem, EndBehavior } from './base-item';

/**
 * 特效元素
 */
export interface EffectItem extends BaseItem {
  type: ItemType.effect,
  content: EffectContent,
  endBehavior: EndBehavior,
}

/**
 * 特效元素属性
 */
export interface EffectContent {
  /**
   * 特效元素材质数据索引组
   */
  materials: number[],
  /**
   * 特效元素几何数据索引
   */
  geometry: number,
  /**
   * 特效元素大小变化属性
   */
  sizeOverLifetime?: SizeOverLifetime,
  /**
   * 特效元素旋转变化属性
   */
  rotationOverLifetime?: RotationOverLifetime,
  /**
   * 特效元素位置变化属性
   */
  positionOverLifetime?: PositionOverLifetime,
}

export interface EffectComponentData extends ComponentData {
  _priority: number,
  materials: DataPath[],
  geometry: DataPath,
}
