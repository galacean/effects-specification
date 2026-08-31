import type { ColorData } from '../../math/color-data';
import type { DataPath } from '../component-data';
import type { ControlData } from './control-data';
import type { TextureExpandMode, TextureStretchMode } from './serialized-enums';

export interface TextureRectData extends ControlData {
  texture?: DataPath | null,
  expandMode?: TextureExpandMode,
  stretchMode?: TextureStretchMode,
  flipH?: boolean,
  flipV?: boolean,
  tint?: ColorData,
}
