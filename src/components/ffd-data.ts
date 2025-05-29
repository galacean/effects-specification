import { Vector3Data } from 'src/math';
import type { ComponentData } from './component-data';

export interface FFDComponentData extends ComponentData {
  controlPoints?: Vector3Data[],
}