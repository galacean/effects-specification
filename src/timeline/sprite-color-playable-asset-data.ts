import type { EffectsObjectData } from 'src/components';
import type { RGBAColorValue } from 'src/number-expression';
import type { ColorOverLifetime } from 'src/type';

export interface SpriteColorPlayableAssetData extends EffectsObjectData {
  colorOverLifetime?: ColorOverLifetime,
  startColor?: RGBAColorValue,
}