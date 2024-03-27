import type {
  SizeOverLifetime,
  RotationOverLifetime,
  PositionOverLifetime,
  ColorOverLifetime,
  ItemType,
} from '../type';
import type { RGBAColorValue } from '../numberExpression';
import type { BaseItem } from './base-item';
import { ComponentData, EffectsObjectData } from 'src/components';
/**
 * 空节点元素
 */
export interface NullItem extends BaseItem {
  /**
   * 元素类型[指定为null]
   */
  type: ItemType.null,
  /**
   * 空节点元素渲染信息
   */
  content: NullContent,
}

/**
 * 空节点元素渲染属性
 */
export interface NullContent {
  /**
   * 空节点元素基础属性
   */
  options: {
    /**
     * 空节点元素基础颜色
     */
    startColor?: RGBAColorValue,
  },
  /**
   * 空节点元素大小变化属性
   */
  sizeOverLifetime?: SizeOverLifetime,
  /**
   * 空节点元素旋转变化属性
   */
  rotationOverLifetime?: RotationOverLifetime,
  /**
   * 空节点元素位置变化属性
   */
  positionOverLifetime?: PositionOverLifetime,
  /**
   * 空节点元素色彩变化属性
   */
  colorOverLifetime?: ColorOverLifetime,
}

export interface TimelineComponentData extends ComponentData {
  /**
   * 轨道数据
   */
  tracks: TrackData[];
}

export interface TrackData {
  type: string,
  clips: TimelineClipData[],
}

export interface TimelineClipData {
  start: number,
  duration: number,
  asset: EffectsObjectData,
}

export interface TransformAnimationClipData extends EffectsObjectData {
  /**
   * 空节点元素大小变化属性
   */
  sizeOverLifetime?: SizeOverLifetime,
  /**
   * 空节点元素旋转变化属性
   */
  rotationOverLifetime?: RotationOverLifetime,
  /**
   * 空节点元素位置变化属性
   */
  positionOverLifetime?: PositionOverLifetime,
}

export interface SpriteColorAnimationClipData extends EffectsObjectData {
  /**
   * 空节点元素色彩变化属性
   */
  colorOverLifetime?: ColorOverLifetime,
  /**
   * 图层初始颜色
   */
  startColor?: RGBAColorValue,
}