import type { RangeData } from './range-data';

export interface SliderData extends RangeData {
  editable?: boolean,
  scrollable?: boolean,
}
