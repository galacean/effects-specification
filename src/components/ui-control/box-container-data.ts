import type { ControlData } from './control-data';
import type { LayoutAlignment } from './serialized-enums';

export interface BoxContainerData extends ControlData {
  alignment?: LayoutAlignment,
  reverse?: boolean,
}
