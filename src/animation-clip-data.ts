import type { FixedNumberExpression, FixedVec3Expression } from './number-expression';

export interface AnimationClipData {
  positionCurve: PositionCurveData,
  eulerCurve: EulerCurveData,
  scaleCurve: ScaleCurveData,
  floatCurves: FloatCurveData[],
}

export interface PositionCurveData {
  path: string[],
  keyFrames: FixedVec3Expression,
}

export interface EulerCurveData {
  path: string[],
  keyFrames: FixedVec3Expression,
}

export interface ScaleCurveData {
  path: string[],
  keyFrames: FixedVec3Expression,
}

export interface FloatCurveData {
  path: string[],
  property: string[],
  className: string,
  keyFrames: FixedNumberExpression,
}