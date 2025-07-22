import type { EffectsObjectData } from './effects-object-data';
import type { FixedNumberExpression, FixedVec3Expression, FixedQuatExpression, ColorCurveValue } from './number-expression';

export interface AnimationClipData extends EffectsObjectData {
  duration?: number,
  positionCurves?: PositionCurveData[],
  rotationCurves?: QuaternionRotationCurveData[],
  eulerCurves?: EulerRotationCurveData[],
  scaleCurves?: ScaleCurveData[],
  floatCurves?: AnimationCurveFloatData[],
  colorCurves?: AnimationCurveColorData[],
}

export interface PositionCurveData {
  path: string,
  keyFrames: FixedVec3Expression,
}

export interface QuaternionRotationCurveData {
  path: string,
  keyFrames: FixedQuatExpression,
}

export interface EulerRotationCurveData {
  path: string,
  keyFrames: FixedVec3Expression,
}

export interface ScaleCurveData {
  path: string,
  keyFrames: FixedVec3Expression,
}

export interface AnimationCurveFloatData {
  path: string,
  property: string,
  className: string,
  keyFrames: FixedNumberExpression,
}

export interface AnimationCurveColorData {
  path: string,
  property: string,
  className: string,
  keyFrames: ColorCurveValue,
}