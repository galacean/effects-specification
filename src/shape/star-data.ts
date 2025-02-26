import type { TransformData } from '../item/base-item';
import type { ShapeComponentData } from './shape-component-data';

/**
 * 星形参数
 */
export interface StarData extends ShapeComponentData {
  /**
   * 顶点数 - 内外顶点同数
   */
  pointCount: number,
  /**
   * 内径
   */
  innerRadius: number,
  /**
   * 外径
   */
  outerRadius: number,
  /**
   * 内径点圆度
   */
  innerRoundness: number,
  /**
   * 外径点圆度
   */
  outerRoundness: number,
  /**
   * 空间变换
   */
  transform?: TransformData,
}
