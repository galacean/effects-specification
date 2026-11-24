import type { DataPath } from '../../components';
import type { DataType } from '../../data-type';
import type { EffectsObjectData } from '../../effects-object-data';

export interface TrackAssetData extends EffectsObjectData {
  /**
   * 子轨道数据（TrackAssetData）
   */
  children: DataPath[],
  /** 轨道片段引用（TimelineClipData）。 */
  clips: DataPath[],
}

export interface PropertyTrackData extends TrackAssetData {
  path?: string,
}

export interface MaterialTrackData extends TrackAssetData {
  dataType: DataType.MaterialTrack,
  index?: number,
}
