import type { ParticleEmitterShapeType } from '../type';
import type { NumberExpression, vec3 } from '../number-expression';

export enum ShapeArcMode {
  /**
   * 随机
   */
  RANDOM,
  /**
   * 单向循环
   */
  UNIDIRECTIONAL_CYCLE,
  /**
   * 双向循环
   */
  BIDIRECTIONAL_CYCLE,
  /**
   * 均匀爆发
   */
  UNIFORM_BURST,
}

export interface ParticleShapeBase {
  /**
   * 粒子形状类型
   */
  type: ParticleEmitterShapeType,
  /**
   * 发射模式
   */
  arcMode: ShapeArcMode,
  /**
   * 运动对齐开关
   */
  alignSpeedDirection?: boolean,
  /**
   * 向上方向
   */
  upDirection?: vec3,
  /**
   * 发射方向旋转
   */
  turbulenceX?: NumberExpression,
  turbulenceY?: NumberExpression,
  turbulenceZ?: NumberExpression,
}

export interface ParticleShapeNone {
  type: ParticleEmitterShapeType.NONE,
  /**
   * 发射方向旋转
   */
  turbulenceX?: NumberExpression,
  turbulenceY?: NumberExpression,
  turbulenceZ?: NumberExpression,
  upDirection?: number[],
}

export type ParticleShape =
  | ParticleShapeCone
  | ParticleShapeCircle
  | ParticleShapeSphere
  | ParticleShapeHemisphere
  | ParticleShapeDonut
  | ParticleShapeRect
  | ParticleShapeRectEdge
  | ParticleShapeTexture
  | ParticleShapeEdge
  | ParticleShapeNone
  ;

/**
 * 圆锥发射器
 */
export interface ParticleShapeCone extends ParticleShapeBase {
  type: ParticleEmitterShapeType.CONE,
  /**
   * 形状角度
   */
  angle: number,
  /**
   * 形状半径
   */
  radius: number,
  /**
   * 形状曲率
   */
  arc: number,
}

/**
 * 圆发射器
 */
export interface ParticleShapeCircle extends ParticleShapeBase {
  type: ParticleEmitterShapeType.CIRCLE,
  /**
   * 形状半径
   */
  radius: number,
  /**
   * 形状曲率
   */
  arc: number,
}

/**
 * 圆球发射器
 */
export interface ParticleShapeSphere extends ParticleShapeBase {
  type: ParticleEmitterShapeType.SPHERE,
  /**
   * 形状半径
   */
  radius: number,
  /**
   * 形状曲率
   */
  arc: number,
}

/**
 * 半球发射器
 */
export interface ParticleShapeHemisphere extends ParticleShapeBase {
  type: ParticleEmitterShapeType.HEMISPHERE,
  /**
   * 形状半径
   */
  radius: number,
  /**
   * 形状曲率
   */
  arc: number,
}

/**
 * 圆环发射器
 */
export interface ParticleShapeDonut extends ParticleShapeBase {
  type: ParticleEmitterShapeType.DONUT,
  /**
   * 形状半径
   */
  radius: number,
  /**
   * 圆环半径
   */
  donutRadius: number,
  /**
   * 形状曲率
   */
  arc: number,
}

/**
 * 矩形发射器
 */
export interface ParticleShapeRect extends ParticleShapeBase {
  type: ParticleEmitterShapeType.RECTANGLE,
  /**
   * 宽度
   */
  width: number,
  /**
   * 高度
   */
  height: number,
}

/**
 * 矩形框发射器
 */
export interface ParticleShapeRectEdge extends ParticleShapeBase {
  type: ParticleEmitterShapeType.RECTANGLE_EDGE,
  /**
   * 宽度
   */
  width: number,
  /**
   * 高度
   */
  height: number,
}

/**
 * 直线发射器
 */
export interface ParticleShapeEdge extends ParticleShapeBase {
  type: ParticleEmitterShapeType.EDGE,
  /**
   * 宽度
   */
  width: number,
}

/**
 * 贴图发射器
 */
export interface ParticleShapeTexture extends ParticleShapeBase {
  type: ParticleEmitterShapeType.TEXTURE,
  detail: ParticleTextureShapeDetail,
  /**
   * 贴图随机数
   */
  random: number,
  /**
   * 宽度
   */
  width: number,
  /**
   * 高度
   */
  height: number,
}

/**
 * 贴图形状数据
 */
export interface ParticleTextureShapeDetail {
  /**
   * 贴图形状宽度
   */
  width: number,
  /**
   * 贴图形状高度
   */
  height: number,
  /**
   * 编辑器参数
   * 对于图片栅格化时，像素区域的大小
   */
  block: [number, number],
  /**
   * 贴图形状点
   */
  anchors: number[],
}
