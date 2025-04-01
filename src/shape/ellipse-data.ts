import type { TransformData } from '../item/base-item';
import type { ShapeComponentData } from './shape-component-data';
import type { ShapePrimitiveType } from './shape-primitive-type';

/**
 * 椭圆组件参数
 */
export interface EllipseData extends ShapeComponentData {
  type: ShapePrimitiveType.Ellipse,
  /**
   * x 轴半径
   * -- TODO 后续完善类型
   * -- TODO 可以看一下用xRadius/yRadius 还是 width/height
   */
  xRadius: number,
  /**
   * y 轴半径
   */
  yRadius: number,
  /**
   * 空间变换
   */
  transform?: TransformData,
}
