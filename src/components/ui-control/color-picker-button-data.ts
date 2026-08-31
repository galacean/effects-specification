import type { ColorData } from '../../math/color-data';
import type { ButtonData } from './button-data';

export interface ColorPickerButtonData extends ButtonData {
  color?: ColorData,
  editAlpha?: boolean,
}
