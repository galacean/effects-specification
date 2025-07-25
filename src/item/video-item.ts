import type { ComponentData, DataPath } from '../components';
import type { RGBAColorValue } from '../number-expression';
import type {
  SizeOverLifetime, RotationOverLifetime, PositionOverLifetime, ColorOverLifetime,
  InteractBehavior, RendererOptions, ItemType,
} from '../type';
import type { BaseItem, EndBehavior, MaskOptions } from './base-item';

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
   * 视频链接，索引到 scene 中的 videos 数组
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
export interface VideoComponentData extends ComponentData {
  /**
   * 视频元素基础属性
   */
  options: VideoContentOptions,
  /**
   * 视频元素材质渲染属性
   */
  renderer: RendererOptions,
  /**
   * 视频元素蒙版属性，传入表示需要被遮挡/反向遮挡
   */
  mask?: MaskOptions,
  /**
   * 视频元素大小变化属性
   */
  sizeOverLifetime?: SizeOverLifetime,
  /**
   * 视频元素旋转变化属性
   */
  rotationOverLifetime?: RotationOverLifetime,
  /**
   * 视频元素位置变化属性
   */
  positionOverLifetime?: PositionOverLifetime,
  /**
   * 视频元素色彩变化属性
   */
  colorOverLifetime?: ColorOverLifetime,
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
