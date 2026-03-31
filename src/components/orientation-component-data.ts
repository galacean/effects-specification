import type { ComponentData } from './component-data';
import type { PluginGyroscopeTarget } from '../type';

export interface OrientationComponentData extends ComponentData {
  options: {
    targets?: PluginGyroscopeTarget[],
  },
}
