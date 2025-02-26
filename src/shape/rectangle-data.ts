import type { TransformData } from '../item/base-item';
import type { ShapeComponentData } from './shape-component-data';

/**
 * 矩形参数
 */
export interface RectangleData extends ShapeComponentData {
  /**
   * 宽度
   */
  width: number,
  /**
   * 高度
   */
  height: number,
  /**
   * 角点元素
   */
  roundness: number,
  /**
   * 空间变换
   */
  transform?: TransformData,
}
