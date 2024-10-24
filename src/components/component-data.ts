import { EffectsObjectData } from "../effects-object-data";

export interface DataPath {
  id: string,
}

export interface ComponentData extends EffectsObjectData {
  item: DataPath,
}
