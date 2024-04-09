import type { ItemType } from '../type';
import type { BaseItem, ItemEndBehavior } from './base-item';

/**
 * 特效元素
 */
export interface SpineItem extends BaseItem {
  type: ItemType.effect,
  content: EffectContent,
  endBehavior: ItemEndBehavior,
}

/**
 * 特效元素属性
 */
export interface EffectContent {
  materials: number[],
  geometry: number,
}
