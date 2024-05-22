import type { DataPath, EffectsObjectData } from 'src/components';
import type { TimelineClipData } from '../timeline-clip-data';

export interface TrackAssetData extends EffectsObjectData {
  /**
   * 子轨道数据（TrackAssetData）
   */
  children: DataPath[],
  clips: TimelineClipData,
}