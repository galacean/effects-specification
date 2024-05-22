import type { EffectsObjectData } from 'src/components';
import type { SizeOverLifetime, RotationOverLifetime, PositionOverLifetime } from 'src/type';

export interface TransformAnimationPlayableAssetData extends EffectsObjectData {
  /**
   * 元素大小变化属性
   */
  sizeOverLifetime?: SizeOverLifetime,
  /**
   * 元素旋转变化属性
   */
  rotationOverLifetime?: RotationOverLifetime,
  /**
   * 元素位置变化属性
   */
  positionOverLifetime?: PositionOverLifetime,
}