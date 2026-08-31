import type { ColorData } from '../../math/color-data';
import type { ControlData } from './control-data';

export interface ColorPickerData extends ControlData {
  color?: ColorData,
  editAlpha?: boolean,
}
