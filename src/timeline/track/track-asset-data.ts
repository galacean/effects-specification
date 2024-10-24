import type { DataPath } from '../../components';
import type { TimelineClipData } from '../timeline-clip-data';
import { EffectsObjectData } from '../../effects-object-data';

export interface TrackAssetData extends EffectsObjectData {
  /**
   * 子轨道数据（TrackAssetData）
   */
  children: DataPath[],
  clips: TimelineClipData,
}
