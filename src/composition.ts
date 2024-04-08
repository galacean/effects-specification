import type { Item } from './item';
import {
  CAMERA_CLIP_MODE_NORMAL,
  CAMERA_CLIP_MODE_VERTICAL,
  END_BEHAVIOR_DESTROY,
  END_BEHAVIOR_FORWARD,
  END_BEHAVIOR_FREEZE,
  END_BEHAVIOR_PAUSE,
  END_BEHAVIOR_PAUSE_AND_DESTROY,
  END_BEHAVIOR_RESTART,
} from './constants';
import { type DataPath } from './components';

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

/**
 * 结束行为
 */
export enum CompositionEndBehavior {
  /**
   * 销毁
   */
  destroy = END_BEHAVIOR_DESTROY,
  /**
   * 暂停
   */
  pause = END_BEHAVIOR_PAUSE,
  /**
   * 重播
   */
  restart = END_BEHAVIOR_RESTART,
  /**
   * 无限播放
   */
  forward = END_BEHAVIOR_FORWARD,
  /**
   * 销毁并保留最后一帧
   */
  pause_destroy = END_BEHAVIOR_PAUSE_AND_DESTROY,
  /**
   * 冻结
   */
  freeze = END_BEHAVIOR_FREEZE,
}

/**
 * 合成信息
 */
export interface Composition {
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
  endBehavior: CompositionEndBehavior,
  /**
   * 合成相机信息
   */
  camera: CameraOptions,
  /**
   * 元素信息
   */
  items: Item[],
  /**
   * 合成视窗预览大小
   * 如果没有提供，默认为 player 的 container 大小
   * @default [0,0]
   */
  previewSize?: [width: number, height: number],
  /**
   * 降级图
   */
  fallbackImage?: string,
}

/**
 * 合成数据
 */
export interface CompositionData {
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
  endBehavior: CompositionEndBehavior,
  /**
   * 合成相机信息
   */
  camera: CameraOptions,
  /**
   * 元素信息
   */
  items: DataPath[],
  /**
   * 合成视窗预览大小
   * 如果没有提供，默认为 player 的 container 大小
   * @default [0,0]
   */
  previewSize?: [width: number, height: number],
  /**
   * 降级图
   */
  fallbackImage?: string,
}