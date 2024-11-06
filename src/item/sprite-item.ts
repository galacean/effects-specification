import type { BaseItem, EndBehavior, maskOptions } from './base-item';
import type {
  SizeOverLifetime, RotationOverLifetime, PositionOverLifetime, ColorOverLifetime, ItemType,
  TextureSheetAnimation, RendererOptions, SplitParameter, InteractBehavior,
} from '../type';
import type { RGBAColorValue } from '../number-expression';
import type { ComponentData } from '../components';

/**
 * 图层元素
 */
export interface SpriteItem extends BaseItem {
  /**
   * 元素类型（指定为 sprite）
   */
  type: ItemType.sprite,
  /**
   * 图层元素渲染信息
   */
  content: SpriteContent,
  endBehavior: EndBehavior,
}

export interface SpriteContentOptions {
  /**
   * 元素基础颜色
   * @default [255,255,255,255]
   */
  startColor?: RGBAColorValue,
  /**
   * FIXME: 元素渲染延时
   */
}

/**
 * 图层元素渲染属性
 */
export interface SpriteContent {
  /**
   * added by loader
   * @default null
   */
  splits?: SplitParameter[],
  /**
   * 图层元素基础属性
   */
  options: SpriteContentOptions,
  /**
   * 图层元素材质渲染属性
   */
  renderer: RendererOptions,
  /**
   * 图层元素蒙版属性，传入表示需要作为蒙版/被遮挡/反向遮挡
   */
  mask?: maskOptions,
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
  positionOverLifetime?: PositionOverLifetime,
  /**
   * 图层元素色彩变化属性
   */
  colorOverLifetime?: ColorOverLifetime,
  /**
   * 图层元素贴图变化属性
   */
  textureSheetAnimation?: TextureSheetAnimation,
  /**
   * 图层交互
   */
  interaction?: {
    /**
     * 交互行为
     */
    behavior: InteractBehavior,
  },
}

/**
 * 图层组件属性
 */
export interface SpriteComponentData extends ComponentData, SpriteContent {
}
