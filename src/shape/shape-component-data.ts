import type { ComponentData } from '../components/component-data';
import type { MaskOptions, ObscuredOptions } from '../item/base-item';
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
  /**
   *  蒙版属性，传入表示需要作为蒙版/被遮挡/反向遮挡
   */
  mask?: MaskOptions | ObscuredOptions,
}
