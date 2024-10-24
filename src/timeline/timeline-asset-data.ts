import type { DataPath } from '../components';
import { DataType } from '../data-type';
import { EffectsObjectData } from '../effects-object-data';

export interface TimelineAssetData extends EffectsObjectData {
  dataType: DataType.TimelineAsset,
  /**
   * 轨道数据（TrackAssetData）
   */
  tracks: DataPath[],
}