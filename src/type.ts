import type { DataPath } from './components';
import type {
  FixedVec3Expression, vec2, vec3, GradientColor, ShapePoints, ShapeSplits, FixedNumberExpression,
} from './number-expression';

/**
 * 播放器版本
 */
export interface PlayerVersion {
  /**
   * Web 端版本号
   */
  web: string,
  /**
   * Native 端版本号
   */
  native: string,
}

/*********************************************/
/*               场景属性参数                  */
/*********************************************/

/**
 * 模型属性
 */
export interface GLTF {
  /**
   * 模型序号
   */
  id: number,
  /**
   * 模型地址
   */
  url: string,
  /**
   * 是否复用
   */
  reuse: boolean,
}

/**
 * 插件参数
 */
export interface Plugin {
  /**
   * 插件类型
   */
  type: PluginType,
  /**
   * 插件版本
   */
  version: string,
}

/*********************************************/
/*               元素属性公有参数               */
/*********************************************/

/**
 * 大小变化属性
 */
export interface SizeOverLifetime {
  /**
   * 分轴变化开关
   */
  separateAxes?: boolean,
  /**
   * 整体大小变化信息（非分轴模式）
   */
  size?: FixedNumberExpression,
  /**
   * x 轴大小变化信息（分轴模式）
   */
  x?: FixedNumberExpression,
  /**
   * y 轴大小变化信息（分轴模式）
   */
  y?: FixedNumberExpression,
  /**
   * z 轴大小变化信息（分轴模式）
   */
  z?: FixedNumberExpression,
}

/**
 * 旋转变化属性
 */
export interface RotationOverLifetime {
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
  x?: FixedNumberExpression,
  /**
   * y 轴旋转函数
   */
  y?: FixedNumberExpression,
  /**
   * z 轴旋转函数（不分轴时，变化 z）
   */
  z?: FixedNumberExpression,
}

/**
 * 位置变化属性
 */
export interface PositionOverLifetime {
  /**
   * 路程模式
   */
  asMovement?: boolean,
  /**
   * x 轴位置变化信息
   */
  linearX?: FixedNumberExpression,
  /**
   * y 轴位置变化信息
   */
  linearY?: FixedNumberExpression,
  /**
   * z 轴位置变化信息
   */
  linearZ?: FixedNumberExpression,
  /**
   * 环绕模式
   */
  asRotation?: boolean,
  /**
   * x 轴环绕角度变化信息
   */
  orbitalX?: FixedNumberExpression,
  /**
   * y 轴环绕角度变化信息
   */
  orbitalY?: FixedNumberExpression,
  /**
   * z 轴环绕角度变化信息
   */
  orbitalZ?: FixedNumberExpression,
  /**
   * 环绕中心信息
   */
  orbCenter?: vec3,
  /**
   * 路径
   * @default [0,0,0]
   */
  path?: FixedVec3Expression,
  /**
   * 初速度方向
   */
  direction?: vec3,
  /**
   * 增加一个初速度，匀速直线运动，direction 为运动方向
   * @default 0
   */
  startSpeed?: number,
  /**
   * 速度变化信息
   * @default [ValueType.ConstantNumber, 0]
   */
  speedOverLifetime?: FixedNumberExpression,
  /**
   * 增加一个重力
   * gravity 为重力方向，gravityModifier 为重力大小
   * @default 0
   */
  gravity?: vec3,
  /**
   * 重力变化信息
   */
  gravityOverLifetime?: FixedNumberExpression,
}

/**
 * 颜色变化属性
 */
export interface ColorOverLifetime {
  /**
   * 颜色属性
   */
  color?: GradientColor,
  /**
   * 透明度属性变化值
   */
  opacity?: FixedNumberExpression,
}

/**
 * 雪碧图/帧动画属性
 */
export interface TextureSheetAnimation {
  /**
   * 雪碧图行数
   */
  row: number,
  /**
   * 雪碧图列数
   */
  col: number,
  /**
   * 帧动画总帧数
   * 默认 row * col
   */
  total?: number,
  /**
   * 帧动画开关
   */
  animate: boolean,
}

/**
 * 精灵图坐标属性
 */
export type SplitParameter = [
  /**
   * 起点[归一化坐标]
   */
  sx: number,
  /**
   * 起点[归一化坐标]
   */
  sy: number,
  /**
   * 宽度[归一化距离]
   */
  width: number,
  /**
   * 宽度[归一化距离]
   */
  height: number,
  /**
   * 是否翻转 uv 90 度
   */
  flip: 0 | 1,
];

/*********************************************/
/*               元素属性参数类型               */
/*********************************************/

/**
 * 渲染等级
 */
export enum RenderLevel {
  S = 'S',
  APlus = 'A+',
  A = 'A',
  BPlus = 'B+',
  B = 'B',
}

/**
 * 混合模式
 */
export enum BlendingMode {
  /**
   * 普通混合模式
   */
  ALPHA = 0,
  /**
   * 叠加混合模式
   */
  ADD,
  /**
   * 相乘混合模式
   */
  MULTIPLY,
  /**
   * 亮度混合模式
   */
  BRIGHTNESS,
  /**
   * 减色混合模式
   */
  SUBTRACTION,
  /**
   * 强光混合模式
   */
  STRONG_LIGHT,
  /**
   * 弱光混合模式
   */
  WEAK_LIGHT,
  /**
   * 亮度叠加混合模式
   */
  SUPERPOSITION,
}

/**
 * 单双面模式
 */
export enum SideMode {
  /**
   * 双面模式
   */
  DOUBLE = 1032,
  /**
   * 正面模式
   */
  FRONT = 1028,
  /**
   * 背面模式
   */
  BACK = 1029,
}

/**
 * 蒙版模式
 */
export enum MaskMode {
  /**
   * 无蒙版
   */
  NONE = 0,
  /**
   * 蒙版
   */
  MASK = 1,
  /**
   * 被遮挡
   */
  OBSCURED = 2,
  /**
   * 被反向遮挡
   */
  REVERSE_OBSCURED = 3,
}

/**
 * 发射器形状
 */
export enum ParticleEmitterShapeType {
  /**
   * 没有类型
   */
  NONE = 0,
  /**
   * 圆球
   */
  SPHERE = 1,
  /**
   * 圆锥
   */
  CONE = 2,
  /**
   * 半球
   */
  HEMISPHERE = 3,
  /**
   * 圆
   */
  CIRCLE = 4,
  /**
   * 圆环
   */
  DONUT = 5,
  /**
   * 矩形
   */
  RECTANGLE = 6,
  /**
   * 矩形框
   */
  RECTANGLE_EDGE = 7,
  /**
   * 直线
   */
  EDGE = 8,
  /**
   * 贴图
   */
  TEXTURE = 9,
}

/**
 * 插件类型
 */
export enum PluginType {
  /**
   * 陀螺仪
   */
  GYROSCOPE,
  /**
   * Spine
   */
  SPINE,
}

/**
 * 交互类型
 */
export enum InteractType {
  /**
   * 点击
   */
  CLICK,
  /**
   * 消息
   * 前端收到 onMessageItem 回调
   */
  MESSAGE,
  /**
   * 拖拽
   */
  DRAG,
}

/**
 * 交互行为
 */
export enum InteractBehavior {
  /**
   * 无
   */
  NONE,
  /**
   * 通知
   */
  NOTIFY,
  /**
   * 重置播放器
   */
  RESUME_PLAYER,
  /**
   * 清除元素
   */
  REMOVE,
  /**
   * 暂停播放器
   */
  PAUSE,
}

/**
 * 基础渲染属性
 */
export interface RendererOptions {
  /**
   * 渲染模式
   */
  renderMode?: RenderMode,
  /**
   * 混合模式
   * @default BlendingMode.ALPHA
   */
  blending?: BlendingMode,
  /**
   * 单双面模式
   */
  side?: SideMode,
  /**
   * 是否写入深度缓存
   * @default false
   */
  occlusion?: boolean,
  /**
   * 透明像素是否写入深度缓存，occlusion 为 true 时生效
   * @default false
   */
  transparentOcclusion?: boolean,
  /**
   * 贴图，索引到 scene 中的 images 数组
   */
  texture?: DataPath,
  /**
   * 蒙版模式
   * @default none
   */
  maskMode?: MaskMode,
  /**
   * 蒙版形状，索引到 scene 的 shapes 中
   */
  shape?: number | ShapeGeometry,
  /**
   * 旋转中心
   */
  particleOrigin?: ParticleOrigin,
  /**
   * 锚点
   */
  anchor?: vec2,
}

/**
 * 元素类型
 */
export enum ItemType {
  /**
   * 错误元素
   */
  base = '0',
  /**
   * 图层元素
   */
  sprite = '1',
  /**
   * 粒子元素
   */
  particle = '2',
  /**
   * 空节点元素
   */
  null = '3',
  /**
   * 交互元素
   */
  interact = '4',
  /**
   * 插件元素
   */
  plugin = '5',
  /**
   * 相机元素
   */
  camera = '6',
  /**
   * 预合成元素
   */
  composition = '7',
  /**
   * Spine 元素
   */
  spine = 'spine',
  /**
   * Mesh 元素
   */
  mesh = 'mesh',
  /**
   * 节点树元素
   */
  tree = 'tree',
  /**
   * 文本元素
   */
  text = 'text',
  /**
   * 灯光元素
   */
  light = 'light',
  /**
   * 天空盒元素
   */
  skybox = 'skybox',
  /**
   * 特效元素
   */
  effect = 'effect',
  /**
   * 形状元素
   */
  shape = 'shape',
  /**
   * 后处理元素
   */
  postProcessVolume = 'postProcessVolume',
  /**
   * 节点元素
   */
  node = 'node',
  /**
   * 视频元素
   */
  video = 'video',
  /**
   * 音频元素
   */
  audio = 'audio',
  /**
   * 富文本元素
   */
  richtext = 'richtext',
}

/**
 * 渲染模式
 */
export enum RenderMode {
  /**
   * 广告牌模式
   */
  BILLBOARD,
  /**
   * 网格模式
   */
  MESH,
  /**
   * 垂直广告牌模式
   */
  VERTICAL_BILLBOARD,
  /**
   * 水平广告牌模式
   */
  HORIZONTAL_BILLBOARD,
}

/**
 * 变换中心
 */
export enum ParticleOrigin {
  /**
   * 水平和垂直中点
   */
  PARTICLE_ORIGIN_CENTER = 0,
  /**
   * 水平左侧 垂直顶部
   */
  PARTICLE_ORIGIN_LEFT_TOP = 1,
  /**
   * 水平左侧 垂直中间
   */
  PARTICLE_ORIGIN_LEFT_CENTER = 2,
  /**
   * 水平左侧 垂直底部
   */
  PARTICLE_ORIGIN_LEFT_BOTTOM = 3,
  /**
   * 水平中间 垂直顶部
   */
  PARTICLE_ORIGIN_CENTER_TOP = 4,
  /**
   * 水平中间 垂直底部
   */
  PARTICLE_ORIGIN_CENTER_BOTTOM = 5,
  /**
   * 水平右侧 垂直顶部
   */
  PARTICLE_ORIGIN_RIGHT_TOP = 6,
  /**
   * 水平右侧 垂直中间
   */
  PARTICLE_ORIGIN_RIGHT_CENTER = 7,
  /**
   * 水平右侧 垂直底部
   */
  PARTICLE_ORIGIN_RIGHT_BOTTOM = 8,
}

/**
 * 陀螺仪插件属性
 */
export interface PluginGyroscopeTarget {
  /**
   * 名称
   */
  name: string,
  /**
   * x 轴位移最小值
   */
  xMin: number,
  /**
   * x 轴位移最大值
   */
  xMax: number,
  /**
   * y 轴位移最小值
   */
  yMin: number,
  /**
   * y 轴位移最大值
   */
  yMax: number,
  /**
   * 绕 x 轴（水平）旋转角度最小值
   */
  hMin: number,
  /**
   * 绕 x 轴（水平）旋转角度最大值
   */
  hMax: number,
  /**
   * 绕 y 轴（垂直）旋转角度最小值
   */
  vMin: number,
  /**
   * 绕 y 轴（垂直）旋转角度最大值
   */
  vMax: number,
}

/**
 * 二维蒙版形状属性
 */
export interface ShapeGeometry {
  /**
   * 贝塞尔点信息[顶点信息 前向控制点 后向控制点]
   */
  p: ShapePoints,
  /**
   * 差值信息
   */
  s: ShapeSplits,
}

export enum RenderType {
  Opaque = 'Opaque',
  Transparent = 'Transparent',
}

export enum RenderFace {
  Both = 'Both',
  Back = 'Back',
  Front = 'Front',
}

export type HTMLImageLike = HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
