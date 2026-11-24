import type { DataPath } from './components';
import type { EffectsObjectData } from './effects-object-data';
import type { vec4 } from './number-expression';

/**
 * Sprite UV 旋转方式。序列化为整数（兼容老 splits 的 flip 0/1）。
 * None 不旋转、Rotate90 将 UV 顺时针旋转 90°（width/height 互换）。
 */
export enum SpriteRotation {
  /** 不旋转 */
  None = 0,
  /** UV 旋转 90°（对应老 splits flip=1） */
  Rotate90 = 1,
}

/**
 * Sprite 资产：一张纹理 + 一个归一化 UV 矩形区域。
 * 被 SpriteComponent 引用，替代直接引用 Texture + 散落的 splits。
 */
export interface SpriteData extends EffectsObjectData {
  /** 关联纹理（DataPath 引用） */
  texture?: DataPath,
  /** 归一化 UV 矩形 [x, y, w, h]，默认整张纹理 */
  rect?: vec4,
  /** UV 旋转方式（0=None, 1=Rotate90） */
  rotation?: SpriteRotation,
}
