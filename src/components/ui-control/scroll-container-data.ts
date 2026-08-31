import type { ControlData } from './control-data';
import type { ScrollMode } from './serialized-enums';

export interface ScrollContainerData extends ControlData {
  hScroll?: number,
  vScroll?: number,
  horizontalScrollMode?: ScrollMode,
  verticalScrollMode?: ScrollMode,
  horizontalCustomStep?: number,
  verticalCustomStep?: number,
  scrollHorizontalByDefault?: boolean,
  deadzone?: number,
  followFocus?: boolean,
}
