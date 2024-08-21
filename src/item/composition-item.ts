import type { BaseItem, EndBehavior } from './base-item';
import type {
  SizeOverLifetime, RotationOverLifetime, ColorOverLifetime, ItemType,
} from '../type';
import type { RGBAColorValue, vec3 } from '../number-expression';
import type { PositionOverLifetime } from '../type';

/**
 * 预合成元素
 */
export interface CompositionItem extends BaseItem {
  /**
   * 元素类型（指定为 composition）
   */
  type: ItemType.composition,
  /**
   * 预合成元素渲染信息
   */
  content: CompositionContent,
  endBehavior: EndBehavior,
}

/**
 * 预合成元素
 */
export interface CompositionContent {
  /**
   * 预合成元素基础属性
   */
  options: {
    /**
     * 引用的合成 ID
     */
    refId: string,
    /**
     * 预合成元素宽高
     */
    size?: vec3,
    /**
     * 预合成元素基础颜色
     */
    startColor?: RGBAColorValue,
  },
  /**
   * 预合成元素大小变化属性
   */
  sizeOverLifetime?: SizeOverLifetime,
  /**
   * 预合成元素旋转变化属性
   */
  rotationOverLifetime?: RotationOverLifetime,
  /**
   * 预合成元素位置变化属性
   */
  positionOverLifetime?: PositionOverLifetime,
  /**
   * 预合成元素色彩变化属性
   */
  colorOverLifetime?: ColorOverLifetime,
}
