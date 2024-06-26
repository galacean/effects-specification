import type { EffectsObjectData, DataPath, DataType } from '../components';

export interface TimelineAssetData extends EffectsObjectData {
  dataType: DataType.TimelineAsset,
  /**
   * 轨道数据（TrackAssetData）
   */
  tracks: DataPath[],
}