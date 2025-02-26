import type { ComponentData } from '../components/component-data';
import type { ShapeFillParam } from './shape-fill-param';
import type { ShapePrimitiveType } from './shape-primitive-type';
import type { ShapeStrokeParam } from './shape-stroke-param';

/**
 * 矢量图形组件
 */
export interface ShapeComponentData extends ComponentData {
  /**
   * 矢量类型
   */
  type: ShapePrimitiveType,
  /**
   * 描边属性
   */
  stroke?: ShapeStrokeParam,
  /**
   * 填充属性
   */
  fill?: ShapeFillParam,
}