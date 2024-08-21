import type { BinaryEnv } from '../../binary';
import type { ModelAnimationTrackDataPointer } from './binary';
import type { BaseItem, BaseItemTransform } from '../base-item';
import type { SizeOverLifetime, RotationOverLifetime, PositionOverLifetime, ItemType } from '../../type';
import type { ComponentData, DataPath } from '../../components';

export interface TreeNodeOptions {
  name?: string,
  transform?: BaseItemTransform,
  children?: number[],
  id?: string,
}

export interface TreeOptions {
  nodes: TreeNodeOptions[],
  children: number[],
}

export interface ModelAnimTrackOptions<T extends BinaryEnv> {
  node: number,
  input: ModelAnimationTrackDataPointer<T>,
  output: ModelAnimationTrackDataPointer<T>,
  path: 'translation' | 'rotation' | 'scale' | 'weights',
  interpolation: 'LINEAR' | 'STEP' | 'CUBICSPLINE',
}

export interface ModelAnimationOptions<T extends BinaryEnv> {
  name?: string,
  tracks: ModelAnimTrackOptions<T>[],
}

/**
 * 3D场景树属性，包含动画数据
 */
export interface ModelTreeOptions<T extends BinaryEnv> extends TreeOptions {
  /**
   * 默认动画索引，-1表示不播放动画
   */
  animation?: number,
  /**
   * 3D场景树中所有的动画数据
   */
  animations?: ModelAnimationOptions<T>[],
}

export interface ModelTreeContent<T extends BinaryEnv> {
  /**
   * 3D场景树元素基础属性
   */
  options: {
    tree: ModelTreeOptions<T>,
  },
  /**
   * 3D场景树元素大小变化属性
   */
  sizeOverLifetime?: SizeOverLifetime,
  /**
   * 3D场景树元素旋转变化属性
   */
  rotationOverLifetime?: RotationOverLifetime,
  /**
   * 3D场景树元素位置变化属性
   */
  positionOverLifetime?: PositionOverLifetime,
}

/**
 * 3D场景树元素
 */
export interface ModelTreeItem<T extends BinaryEnv> extends BaseItem {
  type: ItemType.tree,
  content: ModelTreeContent<T>,
}

export interface ModelAnimationTrackData {
  item: DataPath,
  input: number[],
  output: number[],
  path: 'translation' | 'rotation' | 'scale' | 'weights',
  interpolation: 'LINEAR' | 'STEP' | 'CUBICSPLINE',
}

export interface ModelAnimationData {
  name?: string,
  tracks: ModelAnimationTrackData[],
}

export interface ModelAnimationComponentData extends ComponentData {
  /**
   * 默认动画索引，-1表示不播放动画
   */
  animation?: number,
  /**
   * 3D场景树中所有的动画数据
   */
  animations: ModelAnimationData[],
}

export interface AnimationComponentData extends ComponentData {
  /**
   * 默认动画索引，-1表示不播放动画
   */
  animation?: number,
  /**
   * glTF中所有的动画数据
   */
  animationClips: DataPath[],
}

