import type { ComponentData } from './component-data';
import type { RendererOptions } from '../type';
import type { MaskOptions, TrackMatteOptions } from '../item/base-item';

export interface MaskableGraphicData extends ComponentData {
  renderer: RendererOptions,
  /** @deprecated Read legacy track-matte data only. */
  mask?: MaskOptions,
  trackMatte?: TrackMatteOptions,
}
