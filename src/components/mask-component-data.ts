import type { ComponentData } from './component-data';
import type { ShapePathData } from '../shape/custom-shape-data';

export enum MaskOperation {
  Add = 0,
  Subtract = 1,
  Intersect = 2,
}

/** A private path owned by one layer or precomposition, not a reference to another layer. */
export interface PathMaskData {
  /** Stable within the owning component; ordering must not change animation bindings. */
  id: string,
  name?: string,
  /** @default true */
  enabled?: boolean,
  /** @default MaskOperation.Add */
  operation?: MaskOperation,
  /** Inverts the path's coverage before applying operation. @default false */
  inverted?: boolean,
  path: ShapePathData,
}

/**
 * Ordered hard-edge path masks in layer-local coordinates.
 * One component per layer; open paths are ignored.
 */
export interface MaskComponentData extends ComponentData {
  /** @default true */
  enabled?: boolean,
  masks: PathMaskData[],
}
