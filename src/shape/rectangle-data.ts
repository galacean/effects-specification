import type { TransformData } from '../item/base-item';
import type { ShapeComponentData } from './shape-component-data';
import type { ShapeFillParam } from './shape-fill-param';
import type { ShapeStrokeParam } from './shape-stroke-param';

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