import type { EffectsObjectData } from '../../effects-object-data';
import type { SizeOverLifetime, RotationOverLifetime, PositionOverLifetime } from '../../type';
import type { DataType } from '../../data-type';

export interface TransformPlayableAssetData extends EffectsObjectData {
  dataType: DataType.TransformPlayableAsset,
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
