import type { EffectsObjectData } from './effects-object-data';
import type { ColorCurveValue, Vector3CurveValue, BezierValue, BezierCurvePath, BezierCurveQuat } from './number-expression';

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
  keyFrames: BezierCurvePath,
}

export interface QuaternionRotationCurveData {
  path: string,
  keyFrames: BezierCurveQuat,
}

export interface EulerRotationCurveData {
  path: string,
  keyFrames: Vector3CurveValue,
}

export interface ScaleCurveData {
  path: string,
  keyFrames: Vector3CurveValue,
}

export interface AnimationCurveFloatData {
  path: string,
  property: string,
  className: string,
  keyFrames: BezierValue,
}

export interface AnimationCurveColorData {
  path: string,
  property: string,
  className: string,
  keyFrames: ColorCurveValue,
}