import type { ComponentData } from './component-data';
import type { RendererOptions } from '../type';
import type { MaskOptions, TrackMatteOptions } from '../item/base-item';

export interface MaskableGraphicData extends ComponentData {
  renderer: RendererOptions,
  /**
   * @deprecated 仅用于兼容旧轨道遮罩数据，请使用 trackMatte
   */
  mask?: MaskOptions,
  trackMatte?: TrackMatteOptions,
}
