import type { ControlData } from './control-data';

export interface RangeData extends ControlData {
  minValue?: number,
  maxValue?: number,
  step?: number,
  page?: number,
  value?: number,
  exponentialRatio?: boolean,
  rounded?: boolean,
  allowGreater?: boolean,
  allowLesser?: boolean,
}
