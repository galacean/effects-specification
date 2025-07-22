import type { BezierValue, ColorCurveValue, Vector2CurveValue, Vector4CurveValue } from '../../number-expression';
import type { DataType } from '../../data-type';
import type { EffectsObjectData } from '../../effects-object-data';

export interface ColorPropertyPlayableAssetData extends EffectsObjectData {
  dataType: DataType.ColorPropertyPlayableAsset,
  curveData: ColorCurveValue,
}

export interface FloatPropertyPlayableAssetData extends EffectsObjectData {
  dataType: DataType.FloatPropertyPlayableAsset,
  curveData: BezierValue,
}

export interface Vector4PropertyPlayableAssetData extends EffectsObjectData {
  dataType: DataType.Vector4PropertyPlayableAsset,
  curveData: Vector4CurveValue,
}

export interface Vector2PropertyPlayableAssetData extends EffectsObjectData {
  dataType: DataType.Vector2PropertyPlayableAsset,
  curveData: Vector2CurveValue,
}