import type { TransformData } from '../item/base-item';
import type { ShapeComponentData } from './shape-component-data';
import type { ShapeFillParam } from './shape-fill-param';
import type { ShapePrimitiveType } from './shape-primitive-type';
import type { ShapeStrokeParam } from './shape-stroke-param';

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
