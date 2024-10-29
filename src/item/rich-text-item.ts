import type { BaseItem, EndBehavior } from './base-item';
import type { ItemType } from '../type';
import type { BaseTextContentOptions, TextComponentData, TextContent } from './text-item';

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

/**
 * 文本元素渲染属性
 */
export interface RichTextContent extends Omit<TextContent, 'options'> {
  /**
   * 文本元素基础属性
   */
  options: BaseTextContentOptions,
}

/**
 * 富文本元素渲染属性
 */
export interface RichTextComponentData extends Omit<TextComponentData, 'options'> {
  /**
   * 富文本元素基础属性
   */
  options: BaseTextContentOptions,
}
