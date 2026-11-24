import type { EffectsObjectData } from '../effects-object-data';

export interface DataPath {
  id: string,
}

export interface ComponentData extends EffectsObjectData {
  item: DataPath,
  /** 组件是否启用。省略时保留组件当前状态。 */
  enabled?: boolean,
}

export interface RendererComponentData extends ComponentData {
  materials?: DataPath[],
  _priority?: number,
}
