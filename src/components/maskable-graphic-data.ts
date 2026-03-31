import type { ComponentData } from './component-data';
import type { RendererOptions } from '../type';
import type { MaskOptions } from '../item/base-item';

export interface MaskableGraphicData extends ComponentData {
  renderer: RendererOptions,
  mask?: MaskOptions,
}
