import type { BinaryPointer } from '../binary';
import type {
  SizeOverLifetime,
  RotationOverLifetime,
  PositionOverLifetime,
  ColorOverLifetime,
  RendererOptions,
  ItemType,
} from '../type';
import type { BaseItem, ItemEndBehavior } from './base-item';

/**
 * 插件元素
 */
export interface SpineItem extends BaseItem {
  /**
	 * 元素类型 "spine"
	 */
  type: ItemType.spine,
  /**
	 * 插件元素渲染信息
	 */
  content: SpineContent,
  endBehavior: ItemEndBehavior,
}

/**
 * Spine元素渲染属性
 */
export interface SpineContent {
  /**
   * Spine元素基础属性
   */
  options: PluginSpineOption,
  /**
   * Spine元素材质渲染属性
   */
  renderer?: RendererOptions,
  /**
   * Spine元素大小变化属性
   */
  sizeOverLifetime?: SizeOverLifetime,
  /**
   * Spine元素旋转变化属性
   */
  rotationOverLifetime?: RotationOverLifetime,
  /**
   * Spine元素位置变化属性
   */
  positionOverLifetime?: PositionOverLifetime,
  /**
   * Spine元素色彩变化属性
   */
  colorOverLifetime?: ColorOverLifetime,
}

/**
 * Spine 插件属性
 */
export interface PluginSpineOption {
  /**
	 * 当前使用的皮肤名称
	 */
  activeSkin: string,
  /**
	 * 当前使用的动画列表，1.5之前为 string
	 */
  activeAnimation: string[] | string,
  /**
	 * 在 spines 资源数组中的索引
	 */
  spine: number,
  /**
   * 默认融合时间
   */
  mixDuration?: number,
  /**
   * 动画播放的速度
   */
  speed?: number,
  /**
   * 使用的默认大小计算规则
   * 0 ：除以包围盒大小
   * 1 : 相机逆投影 + 固定画布大小
   * @since 1.3.0
   */
  resizeRule: number,
}

/**
 * spine资源信息
 */

export type skeletonFileType = 'json' | 'skel';

export interface SpineResource {
  /**
	 * atlas 文件在 `bins` 中的指针
	 */
  atlas: BinaryPointer,
  /**
	 * 骨骼文件
	 */
  skeleton: BinaryPointer,
  /**
	 * skeleton 文件类型, `.skel/.json`
	 */
  skeletonType: skeletonFileType,
  /**
	 * 图像文件在 `scene.textures` 数组中的索引
	 */
  images: number[],
}
