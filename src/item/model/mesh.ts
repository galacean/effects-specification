import type { BinaryEnv } from '../../binary';
import type { BaseItem, ItemEndBehavior } from '../base-item';
import type { MaterialOptions } from './material';
import type { GeometryPointer } from './binary';
import type { vec3 } from '../../numberExpression';
import type { InteractBehavior, ItemType } from '../../type';
import type { ModelAnimationTrackDataPointer } from './binary';
import type { ComponentData, GeometryData, MaterialData } from '../../components';

export type BufferType =
  | WebGLRenderingContext['FLOAT']
  | WebGLRenderingContext['INT']
  | WebGLRenderingContext['SHORT']
  | WebGLRenderingContext['BYTE']
  | WebGLRenderingContext['UNSIGNED_INT']
  | WebGLRenderingContext['UNSIGNED_SHORT']
  | WebGLRenderingContext['UNSIGNED_BYTE'];

export interface PrimitiveOptions<T extends BinaryEnv> {
  // Geometry 对象，需要 Editor 预创建
  geometry: GeometryPointer<T>,
  // glTF 展开材质对象
  material: MaterialOptions<T>,
}

export interface SkinOptions<T extends BinaryEnv> {
  name?: string,
  joints: number[],
  skeleton?: number,
  inverseBindMatrices?: ModelAnimationTrackDataPointer<T>,
}

export interface ModelMeshOptions<T extends BinaryEnv> {
  // 蒙皮数据对象
  skin?: SkinOptions<T>,
  // primitive 对象二进制
  primitives: PrimitiveOptions<T>[],
  // morph target 初始权重系数
  weights?: number[],
  hide?: boolean,
  parent?: number,
}

export enum ModelBoundingType {
  box = 2,
  sphere = 3,
}

export interface ModelItemBoundingBox {
  behavior?: InteractBehavior | number,
  type: ModelBoundingType.box,
  /**
   * 包围形状相对于元素位置的偏移
   * @default [0,0,0]
   */
  center?: vec3,
  /**
   * 包围盒的 xyz 长度，当 type 为 box 时生效
   */
  size?: vec3,
}

export interface ModelItemBoundingSphere {
  behavior?: InteractBehavior | number,
  /**
   * 包围形状相对于元素位置的偏移
   * @default [0,0,0]
   */
  center?: vec3,
  type: ModelBoundingType.sphere,
  /**
   * 包围球的半径，当 type 为 sphere 时生效
   */
  radius: number,
}

export type ModelItemBounding = ModelItemBoundingBox | ModelItemBoundingSphere;

export interface ModelMeshItemContent<T extends BinaryEnv> {
  options: ModelMeshOptions<T>,
  interaction?: ModelItemBounding,
}

/**
 * 模型元素
 */
export interface ModelMeshItem<T extends BinaryEnv> extends BaseItem {
  type: ItemType.mesh,
  pluginName: 'model',
  content: ModelMeshItemContent<T>,
  endBehavior: ItemEndBehavior,
}

export interface PrimitiveComponentOptions {
  geometry: GeometryData,
  material: MaterialData,
}

export interface ModelMeshComponentOptions {
  primitives: PrimitiveComponentOptions[],
  hide?: boolean,
}

export interface ModelMeshComponentData extends ComponentData {
  options: ModelMeshComponentOptions,
  interaction?: ModelItemBounding,
}
