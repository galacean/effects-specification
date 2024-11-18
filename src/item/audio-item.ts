import type { ComponentData, DataPath } from '../components';
import type { ItemType } from '../type';
import type { BaseItem } from './base-item';

/**
 * 音频元素
 */
export interface AudioItem extends BaseItem {
  /**
   * 元素类型（指定为 audio）
   */
  type: ItemType.audio,
  /**
   * 音频元素基础属性
   */
  content: AudioComponentData,
}

export interface AudioContentOptions {
  /**
   * 音频链接，索引到 scene 中的 audios 数组
   */
  audio: DataPath,
  /**
   * 音频播放速度
   * @default 1
   */
  playbackRate?: number,
  /**
   * 是否静音播放
   * @default false
   */
  muted?: boolean,
  /**
   * 音频音量大小
   * @default 1
   */
  volume?: number,
}

/**
 * 音频组件属性
 */
export interface AudioComponentData extends ComponentData {
  /**
   * 音频元素基础属性
   */
  options: AudioContentOptions,
}
