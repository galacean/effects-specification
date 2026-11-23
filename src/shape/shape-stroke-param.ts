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

export interface VariableWidthPoint {
  /** 裁剪前沿轮廓长度归一化的位置（0 到 1）。 */
  position: number,
  /** 正法线一侧的宽度，相对于基础描边宽度。 */
  ascent: number,
  /** 负法线一侧的宽度，相对于基础描边宽度。 */
  descent: number,
  /** 指定原始线段所在的轮廓；省略时作用于各轮廓。 */
  segmentId?: number,
}
