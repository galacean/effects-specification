import type { ControlData } from './control-data';
import type { ButtonActionMode } from './serialized-enums';

export interface BaseButtonData extends ControlData {
  disabled?: boolean,
  toggleMode?: boolean,
  buttonPressed?: boolean,
  buttonMask?: number,
  actionMode?: ButtonActionMode,
  keepPressedOutside?: boolean,
}
