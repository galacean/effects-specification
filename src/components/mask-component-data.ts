import type { ComponentData } from './component-data';
import type { CustomShape } from '../shape/custom-shape-data';
import type { Vector2Data } from '../math';

export enum MaskOperation {
  Add = 0,
  Subtract = 1,
  Intersect = 2,
}

/**
 * 路径蒙版的路径数据
 */
export interface MaskPathData {
  /**
   * 路径点
   */
  points: Vector2Data[],
  /**
   * 入射控制点
   */
  easingIns: Vector2Data[],
  /**
   * 入射控制点
   */
  easingOuts: Vector2Data[],
  /**
   * 自定义形状
   */
  shapes: CustomShape[],
}

/**
 * 图层或预合成自带的路径蒙版，不引用独立来源图层
 */
export interface PathMaskData {
  /**
   * 组件内唯一且稳定的标识，用于动画绑定，不随蒙版顺序变化
   */
  id: string,
  name?: string,
  /**
   * 是否启用该路径蒙版
   * @default true
   */
  enabled?: boolean,
  /**
   * 蒙版运算方式
   * @default MaskOperation.Add
   */
  operation?: MaskOperation,
  /**
   * 是否在参与运算前反转路径覆盖区域
   * @default false
   */
  inverted?: boolean,
  path: MaskPathData,
}

/**
 * 图层局部坐标系下的有序硬边路径蒙版
 * 每个图层仅允许一个组件，忽略未闭合路径
 */
export interface MaskComponentData extends ComponentData {
  /**
   * 是否启用整组路径蒙版
   * @default true
   */
  enabled?: boolean,
  masks: PathMaskData[],
}
