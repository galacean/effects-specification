import type { ControlData } from './control-data';
import type {
  AutowrapMode,
  HorizontalAlignment,
  TextOverflow,
  VerticalAlignment,
} from './serialized-enums';

export interface LabelData extends ControlData {
  text?: string,
  horizontalAlignment?: HorizontalAlignment,
  verticalAlignment?: VerticalAlignment,
  autowrapMode?: AutowrapMode,
  textOverflow?: TextOverflow,
}
