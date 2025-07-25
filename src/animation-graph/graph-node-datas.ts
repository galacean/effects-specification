export enum NodeDataType {
  AnimationClipNodeData = 'AnimationClipNodeData',
  BlendNodeData = 'BlendNodeData',
  ApplyAdditiveNodeData = 'ApplyAdditiveNodeData',
  LayerBlendNodeData = 'LayerBlendNodeData',

  StateMachineNodeData = 'StateMachineNodeData',
  TransitionNodeData = 'TransitionNodeData',
  StateNodeData = 'StateNodeData',

  ConstFloatNodeData = 'ConstFloatNodeData',
  ConstBoolNodeData = 'ConstBoolNodeData',

  ControlParameterBoolNodeData = 'ControlParameterBoolNodeData',
  ControlParameterFloatNodeData = 'ControlParameterFloatNodeData',
  ControlParameterTriggerNodeData = 'ControlParameterTriggerNodeData',

  NotNodeData = 'NotNodeData',
  AndNodeData = 'AndNodeData',
  OrNodeData = 'OrNodeData',

  EqualNodeData = 'EqualNodeData',
  GreaterNodeData = 'GreaterNodeData',
  LessNodeData = 'LessNodeData'
}
export interface GraphNodeData {
  type: string,
  index: number,
}

export interface AnimationClipNodeData extends GraphNodeData {
  type: NodeDataType.AnimationClipNodeData,
  dataSlotIndex: number,
  playRate?: number,
  loopAnimation?: boolean,
}

export interface EqualNodeData extends GraphNodeData {
  type: NodeDataType.EqualNodeData,
  inputValueNodeIndex: number,
  comparandValueNodeIndex: number,
}

export interface BlendNodeData extends GraphNodeData {
  type: NodeDataType.BlendNodeData,
  sourceNodeIndex0: number,
  sourceNodeIndex1: number,
  inputParameterValueNodeIndex: number,
}

export interface ApplyAdditiveNodeData extends GraphNodeData {
  type: NodeDataType.ApplyAdditiveNodeData,
  baseNodeIndex: number,
  additiveNodeIndex: number,
  inputParameterValueNodeIndex: number,
}

export interface LayerData {
  inputNodeIndex?: number,
  weightValueNodeIndex?: number,
}

export interface LayerBlendNodeData extends GraphNodeData {
  baseNodeIndex?: number,
  layerDatas?: LayerData[],
}

export interface AndNodeData extends GraphNodeData {
  type: NodeDataType.AndNodeData,
  conditionNodeIndices: number[],
}

export interface OrNodeData extends GraphNodeData {
  type: NodeDataType.OrNodeData,
  conditionNodeIndices: number[],
}
export interface NotNodeData extends GraphNodeData {
  type: NodeDataType.NotNodeData,
  inputValueNodeIndex: number,
}

export interface ConstFloatNodeData extends GraphNodeData {
  type: NodeDataType.ConstFloatNodeData,
  value: number,
}

export interface ConstBoolNodeData extends GraphNodeData {
  type: NodeDataType.ConstBoolNodeData,
  value: boolean,
}

export interface ControlParameterFloatNodeData extends GraphNodeData {
  type: NodeDataType.ControlParameterFloatNodeData,
  value: number,
}

export interface ControlParameterBoolNodeData extends GraphNodeData {
  type: NodeDataType.ControlParameterBoolNodeData,
  value: boolean,
}

export interface ControlParameterTriggerNodeData extends GraphNodeData {
  type: NodeDataType.ControlParameterTriggerNodeData,
}

export interface FloatComparisonNodeData extends GraphNodeData {
  inputValueNodeIndex: number,
  comparandValueNodeIndex: number,
}

export interface LessNodeData extends FloatComparisonNodeData {
  type: NodeDataType.LessNodeData,
}

export interface GreaterNodeData extends FloatComparisonNodeData {
  type: NodeDataType.EqualNodeData,
}

export interface StateMachineNodeData extends GraphNodeData {
  type: NodeDataType.StateMachineNodeData,
  stateDatas: StateData[],
  defaultStateIndex: number,
}

export interface TransitionData {
  targetStateIndex: number,
  conditionNodeIndex: number,
  transitionNodeIndex: number,
}

export interface StateData {
  stateNodeIndex: number,
  transitionDatas: TransitionData[],
}

export interface StateNodeData extends GraphNodeData {
  type: NodeDataType.StateNodeData,
  childNodeIndex: number,
}

export interface TransitionNodeData extends GraphNodeData {
  type: NodeDataType.TransitionNodeData,
  duration: number,
  hasExitTime: boolean,
  exitTime: number,
  targetStateNodeIndex: number,
}