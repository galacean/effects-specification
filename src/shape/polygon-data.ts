import type { TransformData } from '../item/base-item';
import type { ShapeComponentData } from './shape-component-data';
import type { ShapeFillParam } from './shape-fill-param';
import type { ShapeStrokeParam } from './shape-stroke-param';

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
   * 填充属性
   */
  fill?: ShapeFillParam,
  /**
   * 描边属性
   */
  stroke?: ShapeStrokeParam,
  /**
   * 空间变换
   */
  transform?: TransformData,
}