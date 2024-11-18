import type { TransformData } from '../item/base-item';
import type { Vector2Data } from '../math';
import type { ShapeComponentData } from './shape-component-data';
import type { ShapeFillParam } from './shape-fill-param';
import type { ShapePrimitiveType } from './shape-primitive-type';
import type { ShapeStrokeParam } from './shape-stroke-param';

/**
 * 自定义形状点
 */
export interface CustomShapePoint {
  /**
   * 顶点索引
   */
  point: number,
  /**
   * 入射点索引
   */
  easingIn: number,
  /**
   * 出射点索引
   */
  easingOut: number,
}

/**
 * 自定义形状参数
 */
export interface CustomShape {
  /**
   * 点索引 - 用于构成闭合图形
   */
  indexes: CustomShapePoint[],
  /**
   * 是否为闭合图形 - 用于Stroke
   */
  close: boolean,
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

/**
 * 自定义图形组件
 */
export interface CustomShapeData extends ShapeComponentData {
  /**
   * 矢量类型 - 形状
   */
  type: ShapePrimitiveType.Custom,
  /**
   * 路径点
   */
  points: Vector2Data[],
  /**
   * 入射控制点
   */
  easingIns: Vector2Data[],
  /**
   * 入射控制点
   */
  easingOuts: Vector2Data[],
  /**
   * 自定义形状
   */
  shapes: CustomShape[],
}