import type { BaseItem, ItemEndBehavior } from '../base-item';
import type { CameraOptions } from '../../composition';
import type { RotationOverLifetime, PositionOverLifetime } from '../../type';
import type { ComponentData } from 'src/components';

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

export interface ModelCameraComponentData extends ComponentData {
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