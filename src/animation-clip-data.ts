import type { EffectsObjectData } from './components';
import type { FixedNumberExpression, FixedVec3Expression, FixedQuatExpression } from './number-expression';

export interface AnimationClipData extends EffectsObjectData {
  positionCurves: PositionCurveData[],
  rotationCurves: RotationCurveData[],
  scaleCurves: ScaleCurveData[],
  floatCurves: FloatCurveData[],
}

export interface PositionCurveData {
  path: string,
  keyFrames: FixedVec3Expression,
}

export interface RotationCurveData {
  path: string,
  keyFrames: FixedQuatExpression,
}

export interface ScaleCurveData {
  path: string,
  keyFrames: FixedVec3Expression,
}

export interface FloatCurveData {
  path: string,
  property: string,
  className: string,
  keyFrames: FixedNumberExpression,
}