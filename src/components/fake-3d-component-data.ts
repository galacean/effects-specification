import type { ComponentData } from './component-data';
import type { DataType } from '../data-type';

export enum Fake3DAnimationMode {
  Circular,
  Linear,
}

export interface Fake3DComponentData extends ComponentData {
  dataType: DataType.Fake3DComponent,
  loop?: boolean,
  amountOfMotion?: number,
  animationLength?: number,
  mode?: Fake3DAnimationMode,
  startPositionX?: number,
  startPositionY?: number,
  startPositionZ?: number,
  endPositionX?: number,
  endPositionY?: number,
  endPositionZ?: number,
  amplitudeX?: number,
  amplitudeY?: number,
  amplitudeZ?: number,
  phaseX?: number,
  phaseY?: number,
  phaseZ?: number,
}
