import type { BaseItem, ItemEndBehavior } from '../base-item';
import type { CameraClipMode, CameraOptions } from '../../composition';
import type { RotationOverLifetime, PositionOverLifetime } from '../../type';
import type { ComponentData } from '../../components';

export interface ModelCameraOptions extends CameraOptions {
  parent?: number,

  /**
   * 默认不提供，等于 canvas 的 `width/height`
   */
  aspect?: number,
}

export interface ModelCameraContent {
  /**
   * 3D相机元素基础属性
   */
  options: ModelCameraOptions,
  /**
   * 3D相机元素旋转变化属性
   */
  rotationOverLifetime?: RotationOverLifetime,
  /**
   * 3D相机元素位置变化属性
   */
  positionOverLifetime?: PositionOverLifetime,
}

/**
 * 3D相机元素
 */
export interface ModelCameraItem extends BaseItem {
  type: 'camera',
  pluginName: 'model',
  content: ModelCameraContent,
  endBehavior: ItemEndBehavior,
}

export enum CameraType {
  orthographic = 'orthographic',
  perspective = 'perspective',
}

export interface ModelCameraComponentData extends ComponentData {
  /**
   * 相机类型，默认是透视相机
   */
  type?: CameraType,
  /**
   * 视角属性
   */
  fov?: number,
  /**
   * 相机远平面
   */
  far?: number,
  /**
   * 相机近平面
   */
  near?: number,
  /**
   * 默认不提供，等于 canvas 的 `width/height`
   */
  aspect?: number,
  /**
   * x轴上范围（正交相机）
   */
  xmag?: number,
  /**
   * y轴上范围（正交相机）
   */
  ymag?: number,
  /**
   * 相机剪裁模式
   */
  clipMode?: CameraClipMode,
}
