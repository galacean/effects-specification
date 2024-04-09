import type {
  BaseItem, ColorOverLifetime, FixedNumberExpression, FixedVec3Expression, FunctionExpression,
  ItemEndBehavior, ItemType, MaskMode, NumberExpression, RenderMode, RotationOverLifetime,
  ShapeGeometry, SideMode, SizeOverLifetime, SpriteContentOptions, vec2, vec3,
} from '../index';

export interface FilterItem extends BaseItem {
  type: ItemType.filter,
  content: FilterContent,
  endBehavior: ItemEndBehavior,
}

export type FilterParams =
  | NoneFilterParams
  | GaussianFilterParams
  | BloomFilterPrams
  | DelayFilterPrams
  | DistortionFilterParams
  | CameraMoveFilterParams
  | AlphaMaskFilterParams
  | AlphaFrameFilterParams
  ;

export interface FilterContent {
  options: SpriteContentOptions,

  filter: FilterParams,

  renderer?: FilterContentRenderer,

  colorOverLifetime?: ColorOverLifetime,
  /**
   * 图层元素大小变化属性
   */
  sizeOverLifetime?: SizeOverLifetime,
  /**
   * 图层元素旋转变化属性
   */
  rotationOverLifetime?: RotationOverLifetime,
  /**
   * 图层元素位置变化属性
   */
  positionOverLifetime?: FilterPositionOverLifetime,
}

export interface FilterPositionOverLifetime {
  path: FixedVec3Expression,
}

export interface BaseFilterParams {
  name: string,
  /**
   * 边缘透明度
   * @default 1
   */
  feather?: FunctionExpression,
}

export interface NoneFilterParams extends BaseFilterParams {
  name: 'none',
}

// 高斯模糊
export interface GaussianFilterParams extends BaseFilterParams {
  name: 'gaussian',
  radius: number,
}

// 动作延迟
export interface DelayFilterPrams extends BaseFilterParams {
  name: 'delay',
}

// 发光
export interface BloomFilterPrams extends BaseFilterParams {
  name: 'bloom',
  colorThreshold?: vec3,
  bloomAddon?: FixedNumberExpression,
  colorAddon?: FixedNumberExpression,
  radius?: number,
}

// 扭曲
export interface DistortionFilterParams extends BaseFilterParams {
  name: 'distortion',
  center?: vec2,
  direction?: vec2,
  period: NumberExpression,
  waveMovement: NumberExpression,
  strength: NumberExpression,
}

// 移动镜头
export interface CameraMoveFilterParams extends BaseFilterParams {
  name: 'cameraMove',
  position?: FixedVec3Expression,
}

// 渐变滤镜
export interface AlphaMaskFilterParams extends BaseFilterParams {
  name: 'alphaMask',
  xOpacity: FixedNumberExpression,
  yOpacity: FixedNumberExpression,
}

// 透明视频
export interface AlphaFrameFilterParams extends BaseFilterParams {
  name: 'alphaFrame',
  colorRange?: [x: number, y: number],
  alphaRange?: [x: number, y: number],
}

export const BloomFilterThresholdAvgColor = 0;

export interface FilterContentRenderer {
  /**
   * 渲染模式
   */
  renderMode?: RenderMode,
  /**
   * 锚点信息
   */
  anchor?: vec2,
  /**
   * 单双面模式
   */
  side?: SideMode,
  /**
   * 蒙版模式
   * @default none
   */
  maskMode?: MaskMode,
  /**
   * 形状
   */
  shape?: number | ShapeGeometry,
}
