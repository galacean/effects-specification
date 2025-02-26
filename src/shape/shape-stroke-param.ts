import type { ColorData } from '../math/color-data';

export enum LineCap {
  /** 默认值。向线条的每个末端添加平直的边缘 */
  Butt,
  /** 向线条的每个末端添加圆形线帽 */
  Round,
  /** 向线条的每个末端添加正方形线帽 */
  Square
}

export enum LineJoin {
  /** 创建圆角 */
  Round,
  /** 创建斜角 */
  Bevel,
  /** 创建尖角 */
  Miter
}

/**
 * 矢量描边参数
 */
export interface ShapeStrokeParam {
  /**
   * 线宽
   */
  width: number,
  /**
   * 线颜色
   */
  color: ColorData,
  /**
   * 线段端点的样式
   */
  cap: LineCap,
  /**
   * 线段连接处的样式
   */
  join: LineJoin,
}
