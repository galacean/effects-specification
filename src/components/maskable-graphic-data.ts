import type { RendererComponentData } from './component-data';
import type { RendererOptions } from '../type';
import type { MaskOptions } from '../item/base-item';

export interface MaskableGraphicData extends RendererComponentData {
  renderer?: RendererOptions,
  mask?: MaskOptions,
}
