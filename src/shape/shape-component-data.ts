import type { SideMode, BlendingMode } from '../type';
import type { RendererComponentData, DataPath } from '../components/component-data';
import type { MaskOptions, TransformData } from '../item/base-item';
import type { ShapePrimitiveType } from './shape-primitive-type';
import type { LineCap, LineJoin, VariableWidthPoint } from './shape-stroke-param';
import type { Vector2Data } from '../math/vector-data';
import type { GradientColor } from '../number-expression';
import type { ColorData } from '../math/color-data';

/**
 * 矢量图形组件
 */
export interface ShapeComponentData extends RendererComponentData {
  /**
   * 矢量类型
   */
  type: ShapePrimitiveType,
  strokeWidth?: number,
  /** 闭合路径的描边对齐：0 为外侧，0.5 为居中，1 为内侧。 */
  strokeAlignment?: number,
  strokeCap?: LineCap,
  strokeJoin?: LineJoin,
  strokeMiterLimit?: number,
  transform?: TransformData,
  variableWidthPoints?: VariableWidthPoint[],
  strokeTrimPath?: TrimPathData,
  fillTrimPath?: TrimPathData,

  /**
   * 描边属性
   */
  strokes: PaintData[],
  /**
   * 填充属性
   */
  fills: PaintData[],
  /**
   *  蒙版属性，传入表示需要作为蒙版/被遮挡/反向遮挡
   */
  mask?: MaskOptions,
  /**
   * 图形元素材质渲染属性
   */
  renderer?: ShapeRendererOptions,
}

export interface TrimPathData {
  start: number,
  end: number,
  offset: number,
  mode: TrimPathMode,
}

export enum TrimPathMode {
  Synchronized,
  Sequential,
}

export interface ShapeRendererOptions {
  side?: SideMode,
  occlusion?: boolean,
  transparentOcclusion?: boolean,
  blending?: BlendingMode,
  texture?: DataPath,
}

export type PaintData =
  | SolidPaintData
  | GradientPaintData
  | TexturePaintData;

export enum FillType {
  Solid,
  GradientLinear,
  GradientRadial,
  GradientAngular,
  Texture
}

export interface SolidPaintData {
  type: FillType.Solid,
  /**
   * 填充颜色
   */
  color: ColorData,
}

export interface GradientPaintData {
  type: FillType.GradientLinear | FillType.GradientAngular | FillType.GradientRadial,
  /**
   * 渐变颜色
   */
  gradientStops: GradientColor,
  /**
   * 渐变起点
   */
  startPoint: Vector2Data,
  /**
   * 渐变终点
   */
  endPoint: Vector2Data,
}

export interface TexturePaintData {
  type: FillType.Texture,
  texture: DataPath,
  scaleMode: TexturePaintScaleMode,
  scalingFactor?: number,
  textureTransform?: TextureTransformData,
  opacity?: number,
}

export interface TextureTransformData {
  offset?: Vector2Data,
  rotation?: number,
  scale?: Vector2Data,
}

export enum TexturePaintScaleMode {
  Fill,
  Fit,
  Crop,
  Tile
}
