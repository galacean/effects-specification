import type { BaseItem, ItemEndBehavior } from './base-item';
import type { ItemType, RotationOverLifetime } from '../type';
import type { FixedNumberExpression, FixedVec3Expression } from '../numberExpression';
import type { CameraClipMode } from '../composition';

export interface CameraItem extends BaseItem {
  /**
   * 元素类型[指定为model]
   */
  type: ItemType.camera,
  /**
   * 相机元素渲染信息
   */
  content: CameraContent,
  endBehavior: ItemEndBehavior,
}

export interface CameraContent {
  /**
   * 相机元素基本属性
   */
  options: {
    /**
     * 视角属性
     */
    fov: number,
    /**
     * 相机远平面
     */
    far: number,
    /**
     * 相机近平面
     */
    near: number,

    /**
     * 相机剪裁模式
     */
    clipMode?: CameraClipMode,

    /**
     * 默认不提供，等于canvas width/height
     */
    aspect?: number,
  },
  /**
   * 相机元素旋转变化属性
   */
  rotationOverLifetime?: RotationOverLifetime,
  /**
   * 相机元素位置变化属性
   */
  positionOverLifetime?: CameraPositionOverLifetime,
}

export interface CameraPositionOverLifetime {
  /**
   * x轴位置变化信息
   */
  linearX?: FixedNumberExpression,
  /**
   * y轴位置变化信息
   */
  linearY?: FixedNumberExpression,
  /**
   * z轴位置变化信息
   */
  linearZ?: FixedNumberExpression,
  /**
   * 路径
   * @default [0,0,0]
   */
  path?: FixedVec3Expression,
}
