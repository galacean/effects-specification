import type { RangeData } from './range-data';
import type { ProgressFillMode } from './serialized-enums';

export interface ProgressBarData extends RangeData {
  showPercentage?: boolean,
  fillMode?: ProgressFillMode,
}
