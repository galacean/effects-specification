import type { EffectsObjectData } from '../components';
import type { RGBAColorValue } from '../number-expression';
import type { ColorOverLifetime } from '../type';

export interface SpriteColorPlayableAssetData extends EffectsObjectData {
  colorOverLifetime?: ColorOverLifetime,
  startColor?: RGBAColorValue,
}