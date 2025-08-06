import type { Vector3Data } from 'src/math';
import type { ComponentData } from './component-data';

export interface FFDComponentData extends ComponentData {
  controlPoints: Vector3Data[],
  boundMin: Vector3Data,
  boundMax: Vector3Data,
  reset: boolean,
  additive: boolean,
  rowNum: number,
  colNum: number,
  presetIndex: number,
}