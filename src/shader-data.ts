import { EffectsObjectData } from "./effects-object-data";

export interface ShaderData extends EffectsObjectData {
  vertex: string,
  fragment: string,
  properties?: string,
}