import type { RGBAColorValue } from '../../number-expression';
import type { ColorOverLifetime } from '../../type';
import type { DataType } from '../../data-type';
import type { EffectsObjectData } from '../../effects-object-data';

export interface SpriteColorPlayableAssetData extends EffectsObjectData {
  dataType: DataType.SpriteColorPlayableAsset,
  colorOverLifetime?: ColorOverLifetime,
  startColor?: RGBAColorValue,
}
