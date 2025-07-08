import type { EffectsObjectData } from '../effects-object-data';
import type { DataPath } from '../components/component-data';
import type { GraphNodeData } from './graph-node-datas';

export interface GraphDataSetData {
  resources: DataPath[],
}

export interface GraphAssetData extends EffectsObjectData {
  nodeDatas: GraphNodeData[],
  graphDataSet: GraphDataSetData,
  rootNodeIndex: number,
  controlParameterIDs: string[],
}