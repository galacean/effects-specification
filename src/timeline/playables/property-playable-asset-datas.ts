import type { BezierValue, ColorCurveValue, ValueType, Vector2CurveValue, Vector3CurveValue, Vector4CurveValue } from '../../number-expression';
import type { DataPath } from '../../components/component-data';
import type { DataType } from '../../data-type';
import type { TimelineClipData } from '../timeline-clip-data';

export interface ColorPropertyPlayableAssetData extends TimelineClipData {
  dataType: DataType.ColorPropertyPlayableAsset,
  curveData: ColorCurveValue,
}

export interface FloatPropertyPlayableAssetData extends TimelineClipData {
  dataType: DataType.FloatPropertyPlayableAsset,
  curveData: BezierValue,
}

export interface Vector4PropertyPlayableAssetData extends TimelineClipData {
  dataType: DataType.Vector4PropertyPlayableAsset,
  curveData: Vector4CurveValue,
}

export interface Vector3PropertyPlayableAssetData extends TimelineClipData {
  dataType: DataType.Vector3PropertyPlayableAsset,
  curveData: Vector3CurveValue,
}

export interface Vector2PropertyPlayableAssetData extends TimelineClipData {
  dataType: DataType.Vector2PropertyPlayableAsset,
  curveData: Vector2CurveValue,
}

export type ReferenceCurveValue = [type: ValueType.REFERENCE_CURVE, keys: [time: number, value: DataPath | null][]];

export interface ObjectReferencePropertyPlayableAssetData extends TimelineClipData {
  dataType: DataType.ObjectReferencePropertyPlayableAsset,
  curveData: ReferenceCurveValue,
}
