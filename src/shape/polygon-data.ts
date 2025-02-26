import type { TransformData } from '../item/base-item';
import type { ShapeComponentData } from './shape-component-data';

/**
 * 多边形参数
 */
export interface PolygonData extends ShapeComponentData {
  /**
   * 顶点数
   */
  pointCount: number,
  /**
   * 外切圆半径
   */
  radius: number,
  /**
   * 角点圆度
   */
  roundness: number,
  /**
   * 空间变换
   */
  transform?: TransformData,
}
