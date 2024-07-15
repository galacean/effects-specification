import type { EndBehavior } from 'src/item/base-item';
import type { DataPath } from '../components';

export interface TimelineClipData {
  start?: number,
  duration?: number,
  endBehavior?: EndBehavior,
  /**
   * 可播放资产（PlayableAssetData）
   */
  asset: DataPath,
}
