import type { ComponentData } from './component-data';
import type { ColorData } from '../math/color-data';

export interface FrameComponentData extends ComponentData {
  color?: ColorData,
}
