import type { ComponentData } from './component-data';
import type { ColorData } from '../math/color-data';
import type { DataType } from 'src/data-type';

export interface FrameComponentData extends ComponentData {
  dataType: DataType.FrameComponent,
  color?: ColorData,
}
