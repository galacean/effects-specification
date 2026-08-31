import type { ControlData } from './control-data';

export interface TextInputData extends ControlData {
  text?: string,
  placeholderText?: string,
  editable?: boolean,
  maxLength?: number,
}
