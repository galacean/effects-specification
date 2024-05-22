import type { RGBAColorValue } from '../number-expression';
import type { ColorOverLifetime, ItemType, PositionOverLifetime, RotationOverLifetime, SizeOverLifetime } from '../type';
import type { BaseItem } from './base-item';
/**
 * 空节点元素
 */
export interface NullItem extends BaseItem {
  /**
   * 元素类型[指定为null]
   */
  type: ItemType.null,
  /**
   * 空节点元素渲染信息
   */
  content: NullContent,
}

/**
 * 空节点元素渲染属性
 */
export interface NullContent {
  /**
   * 空节点元素基础属性
   */
  options: {
    /**
     * 空节点元素基础颜色
     */
    startColor?: RGBAColorValue,
  },
  /**
   * 空节点元素大小变化属性
   */
  sizeOverLifetime?: SizeOverLifetime,
  /**
   * 空节点元素旋转变化属性
   */
  rotationOverLifetime?: RotationOverLifetime,
  /**
   * 空节点元素位置变化属性
   */
  positionOverLifetime?: PositionOverLifetime,
  /**
   * 空节点元素色彩变化属性
   */
  colorOverLifetime?: ColorOverLifetime,
}