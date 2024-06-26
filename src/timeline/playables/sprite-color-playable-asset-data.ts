import type { DataType, EffectsObjectData } from '../../components';
import type { RGBAColorValue } from '../../number-expression';
import type { ColorOverLifetime } from '../../type';

export interface SpriteColorPlayableAssetData extends EffectsObjectData {
  dataType: DataType.SpriteColorPlayableAsset,
  colorOverLifetime?: ColorOverLifetime,
  startColor?: RGBAColorValue,
}