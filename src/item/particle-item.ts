import type {
  ItemType, RendererOptions, TextureSheetAnimation, BlendingMode, SplitParameter, ObscuredMode,
} from '../type';
import type {
  FixedNumberExpression, NumberExpression, GradientColor, vec3, FixedVec3Expression,
  ColorExpression, FunctionExpression,
} from '../number-expression';
import type { BaseItem, EndBehavior, MaskOptions } from './base-item';
import type { ParticleShape } from './particle-shape';
import type { ComponentData, DataPath } from '../components';

/**
 * 粒子交互行为
 */
export enum ParticleInteractionBehavior {
  /**
   * 无
   */
  none,
  /**
   * 移出粒子
   */
  removeParticle,
}

/**
 * 粒子元素
 */
export interface ParticleItem extends BaseItem {
  /**
   * 元素类型（指定为 particle）
   */
  type: ItemType.particle,
  /**
   * 粒子元素渲染信息
   */
  content: ParticleContent,
  endBehavior: EndBehavior,
}

/**
 * 发射器参数
 */
export interface ParticleEmission {
  /**
   * 每秒发射数
   * @default 0
   */
  rateOverTime: NumberExpression,
  /**
   * 粒子集中发射参数
   */
  bursts?: {
    /**
     * 爆发时间
     */
    time: number,
    /**
     * 爆发粒子数量
     */
    count: number,
    /**
     * 周期
     * @default 0
     */
    cycles?: number,
    /**
     * 爆发时间间隔（单位：秒）
     * @default 0
     */
    interval?: number,
  }[],
  /**
   * 粒子集中发射偏移参数
   */
  burstOffsets?: {
    /**
     * 爆发的索引
     */
    index: number,
    /**
     * x 方向偏移值
     */
    x: number,
    /**
     * y 方向偏移值
     */
    y: number,
    /**
     * z 方向偏移值
     */
    z: number,
  }[],
}

export interface ParticlePositionOverLifetime {
  /**
   * 路程模式
   */
  asMovement?: boolean,
  /**
   * x 轴位置变化信息
   */
  linearX?: NumberExpression,
  /**
   * y 轴位置变化信息
   */
  linearY?: NumberExpression,
  /**
   * z 轴位置变化信息
   */
  linearZ?: NumberExpression,
  /**
   * 环绕模式
   */
  asRotation?: boolean,
  /**
   * x 轴环绕角度变化信息
   */
  orbitalX?: NumberExpression,
  /**
   * y 轴环绕角度变化信息
   */
  orbitalY?: NumberExpression,
  /**
   * z 轴环绕角度变化信息
   */
  orbitalZ?: NumberExpression,
  /**
   * 环绕中心信息
   * @default [0,0,0]
   */
  orbCenter?: vec3,
  /**
   * 终点汇聚（发射器专有参数）
   */
  forceTarget?: boolean,
  /**
   * 终点汇聚位置
   * @default [0,0,0]
   */
  target?: vec3,
  /**
   * 终点汇聚函数
   * @default 0
   */
  forceCurve?: FunctionExpression,
  /**
   * 增加一个初速度，匀速直线运动，direction 为运动方向
   * @default 0
   */
  startSpeed?: NumberExpression,
  /**
   * 速度变化信息
   */
  speedOverLifetime?: FixedNumberExpression,
  /**
   * 增加一个重力，gravity 为重力方向，gravityModifier 为重力大小
   * @default 0
   */
  gravity?: vec3,
  /**
   * 重力变化信息
   */
  gravityOverLifetime?: FixedNumberExpression,
}

export interface ParticleRotationOverLifetime {
  /**
   * 分轴变化开关
   */
  separateAxes?: boolean,
  /**
   * 角度模式
   */
  asRotation?: boolean,
  /**
   * x 轴旋转函数
   */
  x?: NumberExpression,
  /**
   * y 轴旋转函数
   */
  y?: NumberExpression,
  /**
   * z 轴旋转函数（不分轴时，变化 z）
   */
  z?: NumberExpression,
}

export interface ParticleSizeOverLifetime {
  /**
   * 分轴变化开关
   */
  separateAxes?: boolean,
  /**
   * 整体大小变化信息（非分轴模式）
   */
  size?: NumberExpression,
  /**
   * x 轴大小变化信息（分轴模式）
   */
  x?: NumberExpression,
  /**
   * y 轴大小变化信息（分轴模式）
   */
  y?: NumberExpression,
}

/**
 * 粒子颜色变化属性
 */
export interface ParticleColorOverLifetime {
  /**
   * 颜色属性
   */
  color?: GradientColor,
  /**
   * 透明度属性变化值
   */
  opacity?: NumberExpression,
}

/**
 * 粒子元素雪碧图/帧动画属性
 */
export interface ParticleTextureSheetAnimation extends TextureSheetAnimation {
  /**
   * 帧融合（仅存在于粒子元素中），因为展示效果不好，不再支持
   */
  //blend: boolean,
  /**
   * 帧动画循环次数（仅存在于粒子元素中）变化
   */
  cycles: NumberExpression,
  /**
   * 帧动画延时（仅存在于粒子元素中）, 遇随机数兼容取最小值
   */
  animationDelay?: NumberExpression,
  /**
   * 帧动画时长（仅存在于粒子元素中）， 遇随机数兼容取最小值
   */
  animationDuration: NumberExpression,
}

export interface ParticleOptions {
  /**
   * 最大粒子数
   */
  maxCount: number,
  /**
   * 粒子生命周期时长
   */
  startLifetime: NumberExpression,
  /**
   * 渲染延时
   * @default 0
   */
  startDelay?: NumberExpression,
  /**
   * 粒子颜色
   */
  startColor?: ColorExpression,
  /**
   * 粒子元素大小
   * 按照宽高比生成时：`start3DSize` 为 `false`，使用 `startSize`（宽度）和 `sizeAspect`（宽度/高度）
   * 按照具体宽高生成时：使用 `startSizeX`，`startSizeY`
   */
  startSize?: NumberExpression,
  sizeAspect?: NumberExpression,
  start3DSize?: boolean,
  startSizeX?: NumberExpression,
  startSizeY?: NumberExpression,
  /**
   * 粒子旋转角度
   */
  startRotationZ?: NumberExpression,
  startRotationX?: NumberExpression,
  startRotationY?: NumberExpression,

  particleFollowParent?: boolean,
}

/**
 * 粒子元素渲染属性
 */
export interface ParticleContent {
  // added by loader
  splits?: SplitParameter[],
  /**
   * 粒子元素基础属性
   */
  options: ParticleOptions,
  /**
   * 粒子元素材质渲染属性
   */
  renderer: RendererOptions,
  /**
   * 粒子元素蒙版属性，传入表示需要被遮挡/反向遮挡
   */
  mask?: MaskOptions,
  /**
   * 粒子元素发射器形状属性
   */
  shape?: ParticleShape,
  /**
   * 粒子元素发射参数属性
   */
  emission: ParticleEmission,
  /**
   * 粒子元素大小变化属性
   */
  sizeOverLifetime?: ParticleSizeOverLifetime,
  /**
   * 发射器 transform 变化
   */
  emitterTransform?: {
    /**
     * 位置变化
     */
    path?: FixedVec3Expression,
  },

  positionOverLifetime?: ParticlePositionOverLifetime,
  /**
   * 粒子元素旋转变化属性
   */
  rotationOverLifetime?: ParticleRotationOverLifetime,
  /**
   * 粒子元素色彩变化属性
   */
  colorOverLifetime?: ParticleColorOverLifetime,
  /**
   * 粒子元素贴图变化属性
   */
  textureSheetAnimation?: ParticleTextureSheetAnimation,
  /**
   * 粒子元素拖尾参数
   */
  trails?: ParticleTrail,
  /**
   * 粒子元素交互参数
   */
  interaction?: {
    /**
     * 交互行为
     */
    behavior?: ParticleInteractionBehavior,
    /**
     * 重叠元素响应开关
     */
    multiple?: boolean,
    /**
     * ray cast 射线拾取时 sphere 的半径
     * @default 0.4
     */
    radius?: number,
  },
}

/**
 * 粒子元素渲染属性
 */
export interface ParticleSystemData extends ComponentData, ParticleContent {
}

/**
 * 粒子拖尾参数
 */
export interface ParticleTrail {
  /**
   * 随粒子消失开关
   */
  dieWithParticles?: boolean,
  /**
   * 拖尾声明周期
   */
  lifetime: NumberExpression,
  /**
   * 最大顶点数z
   */
  maxPointPerTrail: number,
  /**
   * 顶点长度
   */
  minimumVertexDistance: number,
  /**
   * 宽度位置变化
   */
  widthOverTrail: NumberExpression,
  /**
   * 颜色位置变化
   */
  colorOverTrail?: GradientColor,
  /**
   * 混合模式
   */
  blending: BlendingMode,
  /**
   * 颜色周期变化
   */
  colorOverLifetime?: GradientColor,
  /**
   * 继承粒子颜色开关
   */
  inheritParticleColor?: boolean,
  /**
   * 深度遮挡
   */
  occlusion?: boolean,
  /**
   * 透明遮挡
   */
  transparentOcclusion?: boolean,
  /**
   * 透明度周期变化
   */
  opacityOverLifetime?: NumberExpression,
  /**
   * 渲染顺序偏移
   * @default 0
   */
  orderOffset?: number,
  /**
   * 生命周期受粒子影响开关
   */
  sizeAffectsLifetime?: boolean,
  /**
   * 宽度受粒子影响开关
   */
  sizeAffectsWidth?: boolean,
  /**
   * 拖尾贴图
   */
  texture?: DataPath,
  // TODO
  /**
   * 位置受父节点影响
   * 拖尾+图层绑定同一个父节点时使用
   */
  parentAffectsPosition?: boolean,
  /**
   * 拖尾蒙版属性，传入表示需要被遮挡/反向遮挡
   */
  mask?: ObscuredMode,
}

