import type { ControlData } from './control-data';
import type { AspectRatioStretchMode, LayoutAlignment } from './serialized-enums';

export interface AspectRatioContainerData extends ControlData {
  ratio?: number,
  stretchMode?: AspectRatioStretchMode,
  horizontalAlignment?: LayoutAlignment,
  verticalAlignment?: LayoutAlignment,
}
