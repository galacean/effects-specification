import type { ColorCurveData, Vector4CurveData } from './curve-data';

/*********************************************/
/*               基本数值属性参数              */
/*********************************************/
export enum ValueType {
  /**
   * 常数
   */
  CONSTANT = 0,
  /**
   * 二维常数向量
   */
  CONSTANT_VEC2 = 1,
  /**
   * 三维常数向量
   */
  CONSTANT_VEC3 = 2,
  /**
   * 四维常数向量
   */
  CONSTANT_VEC4 = 3,
  /**
   * 随机数
   */
  RANDOM = 4,
  /**
   * 直线
   */
  LINE = 5,
  /**
   * 曲线
   */
  CURVE = 6,
  /**
   * 贝塞尔路径
   */
  BEZIER_PATH = 7,
  /**
   * 颜色
   */
  RGBA_COLOR = 8,
  /**
   * 渐变色
   */
  GRADIENT_COLOR = 9,
  /**
   * 蒙版形状点集
   */
  SHAPE_POINTS = 10,
  /**
   * 蒙版形状切分
   */
  SHAPE_SPLITS = 11,
  /**
   * 直线路径
   */
  LINEAR_PATH = 12,
  /**
   * 多色
   */
  COLORS = 13,
  /**
   * 二进制指针
   */
  BINARY = 20,
  /**
   * 贝塞尔曲线
   */
  BEZIER_CURVE = 21,
  /**
   * 贝塞尔曲线路径
   */
  BEZIER_CURVE_PATH = 22,
  /**
   * 贝塞尔曲线四元数
   */
  BEZIER_CURVE_QUAT = 23,
  /**
   * 颜色曲线
   */
  COLOR_CURVE = 24,
  /**
   * Vector4 曲线
   */
  VECTOR4_CURVE = 25,
}

export type vec2 = [x: number, y: number];
export type vec3 = [x: number, y: number, z: number];
export type vec4 = [x: number, y: number, z: number, w: number];
export type mat2 = [m11: number, m12: number, m21: number, m22: number];
export type mat3 = [
  m11: number, m12: number, m13: number,
  m21: number, m22: number, m23: number,
  m31: number, m32: number, m33: number,
];
export type mat4 = [
  m11: number, m12: number, m13: number, m14: number,
  m21: number, m22: number, m23: number, m24: number,
  m31: number, m32: number, m33: number, m34: number,
  m41: number, m42: number, m43: number, m44: number,
];

/*********************************************/
/*               数值属性参数                  */
/*********************************************/

export type FunctionExpression = LineValue | CurveValue | BezierValue;
export type FixedNumberExpression = ConstantNumber | LineValue | CurveValue | BezierValue;
export type NumberExpression = FixedNumberExpression | RandomValue;
export type FixedVec3Expression = ConstantVec3 | BezierPath | LinearPath | BezierCurvePath;
export type FixedQuatExpression = BezierCurveQuat;

/**
 * 常数数值
 * [0,5]
 * [1,[1,2]]
 * [2,[1,2,3]]
 */
export type ConstantNumber = [type: ValueType.CONSTANT, value: number];

export type ConstantVec2 = [type: ValueType.CONSTANT_VEC2, value: vec2];

export type ConstantVec3 = [type: ValueType.CONSTANT_VEC3, value: vec3];

export type ConstantVec4 = [type: ValueType.CONSTANT_VEC4, value: vec4];

/**
 * 随机数数值
 */
export type RandomValue = [type: ValueType.RANDOM, value: [min: number, max: number]];

/**
 * 直线段数值
 */
export type LineValue = [type: ValueType.LINE, value: [time: number, value: number][]];

export type CurveEasingPoint = [time: number, value: number, tanIn: number, tanOut: number];

/**
 * 曲线段数值
 */
export type CurveValue = [type: ValueType.CURVE, value: CurveEasingPoint[]];

/**
 * 贝塞尔路径数值
 */
export type BezierPath = [type: ValueType.BEZIER_PATH, value: BezierPathValue];

export type BezierPathValue = [
  easing: CurveEasingPoint[],
  points: vec3[],
  controlPoints: vec3[],
];

export type LinearPath = [type: ValueType.LINEAR_PATH, value: LinearPathValue];

export type LinearPathValue = [
  easing: CurveEasingPoint[],
  points: vec3[],
];

/**
 * 关键帧类型
 */
export enum BezierKeyframeType {
  AUTO = 0, // 自动
  EASE = 1, // 缓动
  EASE_IN = 2, // 缓入
  EASE_OUT = 3, // 缓出
  LINE = 4, // 线性 （默认进）
  HOLD = 5, // 定格
  LINE_OUT = 6, // 线性出
}

/**
 * 缓动关键帧数据（有三个点：左曲线控制点、曲线点、右曲线控制点，auto：自动关键帧）
 */
export type EaseKeyframeValue = [
  type: BezierKeyframeType.EASE,
  value: [x1: number, y1: number, x2: number, y2: number, x3: number, y3: number],
  markType?: BezierKeyframeType,
];

/**
 * 缓入关键帧数据（有两个点：左曲线控制点、曲线点）
 */
export type EaseInKeyframeValue = [
  type: BezierKeyframeType.EASE_IN,
  value: [x1: number, y1: number, x2: number, y2: number],
  markType?: BezierKeyframeType,
];

/**
 * 缓出关键帧数据（有两个点：曲线点、右曲线控制点）
 */
export type EaseOutKeyframeValue = [
  type: BezierKeyframeType.EASE_OUT,
  value: [x2: number, y2: number, x3: number, y3: number],
  markType?: BezierKeyframeType,
];

/**
 * 线性关键帧数据（有一个点：曲线点）
 */
export type LineKeyframeValue = [
  type: BezierKeyframeType.LINE,
  value: [x2: number, y2: number],
  markType?: BezierKeyframeType,
];

/**
 * 缓动定格出关键帧（有两个点：左曲线控制点、曲线点）
 */
export type EaseHoldOutKeyframeValue = [
  type: BezierKeyframeType.HOLD,
  value: [x1: number, y1: number, x2: number, y2: number],
  markType: BezierKeyframeType.EASE_IN,
];
/**
 * 缓动定格出关键帧（有两个点：曲线点、右曲线控制点）
 */
export type EaseHoldInKeyframeValue = [
  type: BezierKeyframeType.HOLD,
  value: [x1: number, y1: number, x2: number, y2: number],
  markType: BezierKeyframeType.EASE_OUT,
];
/**
 * 线性定格出关键帧（有一个点：曲线点）
 */
export type LineHoldOutKeyframeValue = [
  type: BezierKeyframeType.HOLD,
  value: [x2: number, y2: number],
  markType: BezierKeyframeType.LINE,
];
/**
 * 线性定格进关键帧（有一个点：曲线点）
 */
export type LineHoldInKeyframeValue = [
  type: BezierKeyframeType.HOLD,
  value: [x2: number, y2: number],
  markType: BezierKeyframeType.LINE_OUT,
];
/**
 * 定格进出关键帧（有一个点：曲线点）
 */
export type HoldInOutKeyframeValue = [
  type: BezierKeyframeType.HOLD,
  value: [x2: number, y2: number],
  markType: BezierKeyframeType.HOLD,
];

/**
 * 定格关键帧
 */
export type HoldKeyframeValue =
  | EaseHoldOutKeyframeValue
  | EaseHoldInKeyframeValue
  | LineHoldOutKeyframeValue
  | LineHoldInKeyframeValue
  | HoldInOutKeyframeValue
  ;

/**
 * 贝塞尔关键帧值
 */
export type BezierKeyframeValue =
  | EaseKeyframeValue
  | EaseInKeyframeValue
  | EaseOutKeyframeValue
  | LineKeyframeValue
  | HoldKeyframeValue
  ;

/**
 * 贝塞尔关键帧
 */
export type BezierValue = [type: ValueType.BEZIER_CURVE, value: BezierKeyframeValue[]];

/**
 * 贝塞尔曲线路径关键帧值
 */
export type BezierCurvePathValue = [easing: BezierKeyframeValue[], points: vec3[], controlePoints: vec3[]];

/**
 * 贝塞尔曲线路径关键帧值
 */
export type BezierCurveQuatValue = [easing: BezierKeyframeValue[], points: vec4[], controlePoints: vec4[]];

/**
 * 贝塞尔曲线路径关键帧
 */
export type BezierCurvePath = [type: ValueType.BEZIER_CURVE_PATH, value: BezierCurvePathValue];

/**
 * 贝塞尔曲线路径关键帧
 */
export type BezierCurveQuat = [type: ValueType.BEZIER_CURVE_QUAT, value: BezierCurveQuatValue];

/**
 * 颜色贝塞尔曲线
 */
export type ColorCurveValue = [type: ValueType.COLOR_CURVE, value: ColorCurveData];

/**
 * Vector4 贝塞尔曲线
 */
export type Vector4CurveValue = [type: ValueType.VECTOR4_CURVE, value: Vector4CurveData];

/*********************************************/
/*               颜色属性参数                 */
/*********************************************/

export type ColorExpression = RGBAColor | GradientColor | RGBAColors;

/**
 * rgba range in [0,255]
 */
export type RGBAColorValue = [r: number, g: number, b: number, a: number];
/**
 * 颜色数值
 */
export type RGBAColor = [type: ValueType.RGBA_COLOR, value: RGBAColorValue];

/**
 * 渐变色数值
 */
export type GradientStop = [stop: number, r: number, g: number, b: number, a: number];
export type GradientColor = [type: ValueType.GRADIENT_COLOR, value: GradientStop[]];
export type RGBAColors = [type: ValueType.COLORS, value: RGBAColorValue[]];

/*********************************************/
/*               蒙版形状属性参数              */
/*********************************************/

/**
 * 蒙版形状控制点数值
 */
export type ShapePoints = [type: ValueType.SHAPE_POINTS, value: [x: number, y: number, xIn: number, yIn: number, xOut: number, yOut: number][]];

/**
 * 蒙版形状采样分割点数值
 */
export type ShapeSplits = [type: ValueType.SHAPE_SPLITS, value: number[][]];
