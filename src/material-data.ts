import { DataPath } from "./components";
import { EffectsObjectData } from "./effects-object-data";
import { Vector4Data, ColorData, Vector2Data } from "./math";

export interface MaterialTextureProperty {
  texture: DataPath,
  offset?: Vector2Data,
  scale?: Vector2Data,
}

export interface MaterialData extends EffectsObjectData {
  shader: DataPath,
  blending?: boolean,
  zWrite?: boolean,
  zTest?: boolean,
  stringTags: Record<string, string>,
  macros: string[],
  ints: Record<string, number>,
  floats: Record<string, number>,
  vector4s: Record<string, Vector4Data>,
  colors: Record<string, ColorData>,
  textures: Record<string, MaterialTextureProperty>,
}