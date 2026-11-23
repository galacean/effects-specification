import type { ComponentData, DataPath } from './component-data';
import type { DataType } from '../data-type';
import type { Vector3Data } from '../math/vector-data';

export interface ConstraintTargetData {
  target: DataPath,
  weight: number,
}

export interface PositionConstraintData extends ComponentData {
  dataType: DataType.PositionConstraint,
  positionAtRest: Vector3Data,
  positionOffset: Vector3Data,
  weight: number,
  constrainX: boolean,
  constrainY: boolean,
  constrainZ: boolean,
  targets: ConstraintTargetData[],
}
