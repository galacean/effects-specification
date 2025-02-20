import type { ComponentData } from '../components/component-data';
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
}