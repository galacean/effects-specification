import type { EffectsObjectData, DataPath } from '../components';

export interface TimelineAssetData extends EffectsObjectData {
  /**
   * 轨道数据（TrackAssetData）
   */
  tracks: DataPath[],
}