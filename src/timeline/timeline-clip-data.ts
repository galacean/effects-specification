import type { EndBehavior } from '../item/base-item';
import type { EffectsObjectData } from '../effects-object-data';

export interface TimelineClipData extends EffectsObjectData {
  start?: number,
  duration?: number,
  endBehavior?: EndBehavior,
}
