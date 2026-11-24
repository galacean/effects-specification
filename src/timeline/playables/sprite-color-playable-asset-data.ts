import type { RGBAColorValue } from '../../number-expression';
import type { ColorOverLifetime } from '../../type';
import type { DataType } from '../../data-type';
import type { TimelineClipData } from '../timeline-clip-data';

export interface SpriteColorPlayableAssetData extends TimelineClipData {
  dataType: DataType.SpriteColorPlayableAsset,
  colorOverLifetime?: ColorOverLifetime,
  startColor?: RGBAColorValue,
}
