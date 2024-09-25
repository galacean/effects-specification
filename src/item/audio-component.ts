import type { ComponentData, DataPath } from '../components';
import type { ItemType } from '../type';
import type { BaseItem, EndBehavior } from './base-item';

/**
 * 音频元素
 */
export interface AudioItem extends BaseItem {
  /**
   * 元素类型（指定为 audio）
   */
  type: ItemType.audio,
  /**
   * 音频元素渲染信息
   */
  content: AudioComponentData,
  endBehavior: EndBehavior,
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
 * 图层组件属性
 */
export interface AudioComponentData extends ComponentData {
  /**
   * 视频元素基础属性
   */
  options: AudioContentOptions,
}
