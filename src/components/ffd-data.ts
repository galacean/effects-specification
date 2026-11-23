import type { Vector3Data } from '../math/vector-data';
import type { ComponentData } from './component-data';

export interface FFDComponentData extends ComponentData {
  controlPoints: Vector3Data[],
  boundMin: Vector3Data,
  boundMax: Vector3Data,
  rowNum: number,
  colNum: number,
}
