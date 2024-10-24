import type { EffectsObjectData } from './effects-object-data';

export interface ShaderData extends EffectsObjectData {
  vertex: string,
  fragment: string,
  properties?: string,
}
