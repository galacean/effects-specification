import type { DataPath, RendererComponentData } from './component-data';
import type { ColorData } from '../math/color-data';
import type { DataType } from '../data-type';
import type { PaintData } from '../shape/shape-component-data';
import type { LineCap, LineJoin } from '../shape/shape-stroke-param';

export interface FrameComponentData extends RendererComponentData {
  dataType: DataType.FrameComponent,
  fills?: PaintData[],
  strokes?: PaintData[],
  strokeWidth?: number,
  /** 闭合路径的描边对齐：0 为外侧，0.5 为居中，1 为内侧。 */
  strokeAlignment?: number,
  strokeCap?: LineCap,
  strokeJoin?: LineJoin,
  strokeMiterLimit?: number,
  titleStyle?: FrameTitleStyleData,
}

export interface FrameTitleStyleData {
  color?: ColorData,
  fontSize?: number,
  fontFamily?: string,
  fontWeight?: 'normal' | 'bold' | number,
  fontStyle?: 'normal' | 'italic' | 'oblique',
  gap?: number,
  icon?: DataPath,
  iconSize?: number,
  iconGap?: number,
}
