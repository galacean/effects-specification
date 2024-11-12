import type { ColorData } from '../math/color-data';

// 本期无该功能 待补充
export enum ShapeConnectType {

}

// @待补充
export enum ShapePointType {
}

/**
 * 矢量描边参数
 */
export interface ShapeStrokeParam {
  /**
   * 线宽
   */
  width: number,
  /**
   * 线颜色
   */
  color: ColorData,
  /**
   * 连接类型
   */
  connectType: ShapeConnectType,
  /**
   * 点类型
   */
  pointType: ShapePointType,
}
