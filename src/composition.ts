import type { ComponentData, DataPath } from './components';
import { CAMERA_CLIP_MODE_NORMAL, CAMERA_CLIP_MODE_VERTICAL } from './constants';
import type { DataType } from './data-type';
import type { Item } from './item';
import type { EndBehavior } from './item/base-item';

export enum CameraClipMode {
  /**
   * 剪裁上下
   */
  portrait = CAMERA_CLIP_MODE_VERTICAL,
  /**
   * 剪裁左右
   */
  landscape = CAMERA_CLIP_MODE_NORMAL,
}

/**
 * 相机属性
 */
export interface CameraOptions {
  /**
   * 视角属性
   */
  fov: number,
  /**
   * 相机远平面
   */
  far: number,
  /**
   * 相机近平面
   */
  near: number,
  /**
   * 相机位置
   * @default [0,0,8]
   */
  position?: [x: number, y: number, z: number],
  /**
   * 相机角度
   * @default [0,0,0]
   */
  rotation?: [x: number, y: number, z: number],
  /**
   * 相机剪裁模式
   */
  clipMode: CameraClipMode,
}

interface CompositionBase {
  /**
   * 合成ID
   */
  id: string,
  /**
   * 合成名称
   */
  name: string,
  /**
   * 合成持续时间
   */
  duration: number,
  /**
   * 合成开始播放的时间，单位妙
   * @default 0
   */
  startTime?: number,
  /**
   * 合成结束行为
   */
  endBehavior: EndBehavior,
  /**
   * 合成相机信息
   */
  camera: CameraOptions,
  /**
   * 合成视窗预览大小
   * 如果没有提供，默认为 player 的 container 大小
   * @default [0,0]
   */
  previewSize?: [width: number, height: number],
}

/**
 * 合成信息
 */
export interface Composition extends CompositionBase {
  /**
   * 元素信息
   */
  items: Item[],
}

/**
 * 合成数据
 */
export interface CompositionData extends CompositionBase {
  /**
   * @description 组件数组
   */
  components: DataPath[],
}

/**
 * 合成组件数据
 */
export interface CompositionComponentData extends ComponentData {
  /**
   * @description 合成组件类型 - 固定为 CompositionComponent
   */
  dataType: DataType.CompositionComponent,
  /**
   * 元素信息
   */
  items: DataPath[],
  /**
   * 时间轴资产（TimelineAssetData）
   */
  timelineAsset: DataPath,
  /**
   * 轨道的场景绑定
   */
  sceneBindings: SceneBindingData[],
}

export interface SceneBindingData {
  /**
   * 绑定的轨道资产（TrackAssetData）
   */
  key: DataPath,
  /**
   * 被绑定的场景对象（VFXItemData）
   */
  value: DataPath,
}
