import type { BaseItem, EndBehavior, MaskOptions } from './base-item';
import type { ItemType } from '../type';
import type { BaseTextContentOptions, TextComponentData, TextContent } from './text-item';
import type { vec2 } from '../number-expression';
import type { TextSizeMode } from '../text';

/**
 * 富文本元素
 */
export interface RichTextItem extends BaseItem {
  /**
   * 元素类型（指定为 richtext）
   */
  type: ItemType.richtext,
  /**
   * 文本元素渲染信息
   */
  content: RichTextContent,
  endBehavior: EndBehavior,
}

/**
 * 富文本元素参数
 */
export interface RichTextContentOptions extends BaseTextContentOptions {
  /**
   * 富文本元素大小
   */
  size?: vec2,
  /**
   * 文本框宽度，用来排版和控制文本溢出行为
   */
  maxTextWidth?: number,
  /**
   * 文本框高度，用来排版和控制文本溢出行为
   * @default undefined
   */
  maxTextHeight?: number,
  /**
   * 是否开启自动换行
   * @default false
   */
  wrapEnabled?: boolean,
  /**
   * 尺寸模式
   * @default TextSizeMode.autoWidth
   */
  sizeMode?: TextSizeMode,
}

/**
 * 富文本元素渲染属性
 */
export interface RichTextContent extends Omit<TextContent, 'options'> {
  /**
   * 富文本元素基础属性
   */
  options: RichTextContentOptions,
}

/**
 * 富文本元素渲染属性
 */
export interface RichTextComponentData extends Omit<TextComponentData, 'options'> {
  /**
   * 富文本元素基础属性
   */
  options: RichTextContentOptions,
  /**
   * 富文本元素蒙版属性，传入表示需要作为蒙版/被遮挡/反向遮挡
   */
  mask?: MaskOptions,
}
