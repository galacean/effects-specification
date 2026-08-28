import type { ColorData } from '../../math/color-data';
import type { ControlData } from './control-data';

export interface ColorRectData extends ControlData {
  color?: ColorData,
}
