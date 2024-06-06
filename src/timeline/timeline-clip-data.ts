import type { DataPath } from '../components';

export interface TimelineClipData {
  start?: number,
  duration?: number,
  /**
   * 可播放资产（PlayableAssetData）
   */
  asset: DataPath,
}
