import type { Vector2Data } from '../math/vector-data';
import type { ColorData } from '../math/color-data';
import type { GradientColor } from '../number-expression';

/**
 * 填充类型
 */
export enum FillType {
  /**
   * 纯色
   */
  Solid,
  /**
   * 线性渐变
   */
  LinearGradient,
  /**
   * 径向渐变
   */
  RadialGradient
}

/**
 * 矢量填充参数
 */
export interface ShapeFillParam {
  /**
   * 填充颜色
   */
  color: ColorData,
  /**
   * 填充类型
   */
  fillType?: FillType,
  /**
   * 渐变颜色
   */
  gradient?: GradientColor,
  /**
   * 渐变起点
   */
  startPoint?: Vector2Data,
  /**
   * 渐变终点
   */
  endPoint?: Vector2Data,
}