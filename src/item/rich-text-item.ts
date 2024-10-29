import type { BaseItem, EndBehavior } from './base-item';
import type {
  SizeOverLifetime, RotationOverLifetime, PositionOverLifetime, ColorOverLifetime, ItemType,
  TextureSheetAnimation, RendererOptions, InteractBehavior,
} from '../type';
import type { RGBAColorValue } from '../number-expression';
import type { FontStyle, TextAlignment, TextBaseline, TextOverflow, TextWeight } from '../text';
import type { ComponentData } from '../components';

/**
 * 富文本元素
 */
export interface RichTextItem extends BaseItem {
  /**
   * 元素类型（指定为 text）
   */
  type: ItemType.richtext,
  /**
   * 文本元素渲染信息
   */
  content: RichTextContent,
  endBehavior: EndBehavior,
}

export interface BaseTextContentOptions {
/**
   * 文本内容
   */
  text: string,
  /**
 * 字体大小
 * @default 40
 */
  fontSize: number,
  /**
   * 文本颜色
   * @default [1,1,1,1]
   */
  textColor?: RGBAColorValue,

  /**
   * 文本字体
   * @default 'Arial'
   */
  fontFamily?: string,
  /**
   * 上下对齐方式
   * @default TextBaseline.middle
   */
  textBaseline?: TextBaseline,
  /**
   * 左右对齐方式
   * @default TextAlignment.left
   */
  textAlign?: TextAlignment,
  /**
   * 文本字重
   * @default TextWeight.normal
   */
  fontWeight?: TextWeight,
  /**
   * 文本样式
   * @default FontStyle.normal
   */
  fontStyle?: FontStyle,
  /**
   * 当文字超过最大宽度时，文字的表现行为
   * 仅当设置文字最大宽度后生效
   * @default TextOverflow.display
   */
  textOverflow?: TextOverflow,
  /**
   * 文本外描边
   */
  outline?: {
    /**
     * 外描边颜色
     * @default [1,1,1,0]
     */
    outlineColor?: RGBAColorValue,
    /**
     * 外描边宽度
     * @default 1
     */
    outlineWidth?: number,
  },
  /**
   * 文本阴影
   */
  shadow?: {
    /**
     * 文本阴影颜色
     * @default [0,0,0,0]
     */
    shadowColor?: RGBAColorValue,
    /**
     * 阴影模糊
     * @default 2
     */
    shadowBlur?: number,
    /**
     * 阴影水平偏移距离
     * @default 0
     */
    shadowOffsetX?: number,
    /**
     * 阴影高度偏移距离
     * @default 0
     */
    shadowOffsetY?: number,
  },
}

/**
 * 文本元素渲染属性
 */
export interface RichTextContent {
  /**
   * 文本元素基础属性
   */
  options: BaseTextContentOptions,
  /**
   * 文本元素材质渲染属性
   */
  renderer: RendererOptions,
  /**
   * 文本元素大小变化属性
   */
  sizeOverLifetime?: SizeOverLifetime,
  /**
   * 文本元素旋转变化属性
   */
  rotationOverLifetime?: RotationOverLifetime,
  /**
   * 文本元素位置变化属性
   */
  positionOverLifetime?: PositionOverLifetime,
  /**
   * 文本元素色彩变化属性
   */
  colorOverLifetime?: ColorOverLifetime,
  /**
   * 文本元素贴图变化属性
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
 * 富文本元素渲染属性
 */
export interface TextComponentData extends ComponentData {
  /**
   * 富文本元素基础属性
   */
  options: BaseTextContentOptions,
  /**
   * 富文本元素材质渲染属性
   */
  renderer: RendererOptions,
  /**
   * 富文本元素大小变化属性
   */
  sizeOverLifetime?: SizeOverLifetime,
  /**
   * 富文本元素旋转变化属性
   */
  rotationOverLifetime?: RotationOverLifetime,
  /**
   * 富文本元素位置变化属性
   */
  positionOverLifetime?: PositionOverLifetime,
  /**
   * 富文本元素色彩变化属性
   */
  colorOverLifetime?: ColorOverLifetime,
  /**
   * 富文本元素贴图变化属性
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
