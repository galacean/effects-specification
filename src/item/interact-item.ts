import type { InteractBehavior, InteractType, ItemType } from '../type';
import type { RGBAColor } from '../number-expression';
import type { BaseItem, EndBehavior } from './base-item';
import type { ComponentData } from '../components';

/**
 * 交互元素
 */
export interface InteractItem extends BaseItem {
  /**
   * 元素类型（指定为 interact）
   */
  type: ItemType.interact,
  /**
   * 交互元素渲染信息
   */
  content: InteractContent,
  endBehavior: EndBehavior,
}

/**
 * 交互元素渲染属性
 */
export interface InteractContent {
  /**
   * 交互元素基础属性
   */
  options: InteractOption,
}

/**
 * 交互元素渲染属性
 */
export interface InteractComponentData extends ComponentData, InteractContent {
}

/**
 * 交互元素基础属性
 */
export type InteractOption =
  | ClickInteractOption
  | MessageInteractOption
  | DragInteractOption
  ;

/**
 * 点击交互元素基础属性
 */
export interface ClickInteractOption {
  /**
   * 交互元素类型
   */
  type: InteractType,
  /**
   * 面板展示开关
   */
  showPreview: boolean,
  /**
   * 预览颜色属性
   */
  previewColor: RGBAColor,
  /**
   * 交互触发行为
   */
  behavior: InteractBehavior,
}

/**
 * 拖拽交互元素基础属性
 */
export interface MessageInteractOption {
  /**
   * 交互元素类型
   */
  type: InteractType,
}

/**
 * 拖拽交互元素基础属性
 */
export interface DragInteractOption {
  /**
   * 交互元素类型
   */
  type: InteractType,
  /**
   * 在编辑器中启用
   */
  enableInEditor: boolean,
  /**
   * x轴拖拽范围
   */
  dxRange?: [min: number, max: number],
  /**
   * y轴拖拽范围
   */
  dyRange?: [min: number, max: number],
  /**
   * 目标
   */
  target: string,
}
