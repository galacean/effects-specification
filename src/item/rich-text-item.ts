import type { BaseItem, EndBehavior } from './base-item';
import type { ItemType } from '../type';
import type { BaseTextContentOptions, TextComponentData, TextContent } from './text-item';
import type { vec2 } from '../number-expression';

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
}
