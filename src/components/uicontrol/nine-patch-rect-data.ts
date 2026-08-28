import type { ColorData } from '../../math/color-data';
import type { DataPath } from '../component-data';
import type { ControlData } from './control-data';
import type { RectData } from './rect-data';
import type { AxisStretchMode } from './serialized-enums';

export interface NinePatchRectData extends ControlData {
  texture?: DataPath | null,
  regionRect?: RectData,
  patchMarginLeft?: number,
  patchMarginTop?: number,
  patchMarginRight?: number,
  patchMarginBottom?: number,
  drawCenter?: boolean,
  horizontalAxisStretchMode?: AxisStretchMode,
  verticalAxisStretchMode?: AxisStretchMode,
  tint?: ColorData,
}
