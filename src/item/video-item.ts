import type { DataPath, MaskableGraphicData } from '../components';
import type { RGBAColorValue } from '../number-expression';
import type { InteractBehavior, ItemType } from '../type';
import type { BaseItem, EndBehavior } from './base-item';

/**
 * 视频元素
 */
export interface VideoItem extends BaseItem {
  /**
   * 元素类型（指定为 video）
   */
  type: ItemType.video,
  /**
   * 视频元素渲染信息
   */
  content: VideoComponentData,
  endBehavior: EndBehavior,
}

export interface VideoContentOptions {
  /**
   * 元素基础颜色
   * @default [255,255,255,255]
   */
  startColor?: RGBAColorValue,
  /**
   * 视频资源引用，使用 scene.videos 中资源的 ID
   */
  video: DataPath,
  /**
   * 视频播放速度
   * @default 1
   */
  playbackRate?: number,
  /**
   * 是否静音播放
   * @default false
   */
  muted?: boolean,
  /**
   * 视频音量大小
   * @default 1
   */
  volume?: number,
  /**
   * 是否为透明视频
   * @default false
   */
  transparent?: boolean,
}

/**
 * 视频组件属性
 */
export interface VideoComponentData extends MaskableGraphicData {
  /**
   * 视频元素基础属性
   */
  options: VideoContentOptions,
  /**
   * 视频元素交互
   */
  interaction?: {
    /**
     * 交互行为
     */
    behavior: InteractBehavior,
  },
}
