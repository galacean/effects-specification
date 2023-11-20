import type { Binary, BinaryEnv, BinaryPointer, TypedArray } from '../../binary';
import type { BufferType } from './mesh';

/**
 * Attribute binding information
 * size: attribute size. the size attribute of vec4|vec3|vec2 is 4|3|2
 * stride: used for interleaved attributes, 2 vec4 stride is 4 * 2 * Float32Array.BYTES_PER_ELEMENTS
 * offset: offset for interleaved attributes, 1 vec4 offset is 4 * Float32Array.BYTES_PER_ELEMENTS
 * normalize: attributed should be normalized
 *
 * Attribute 的绑定信息
 * size：向量的大小，vec4|vec3|vec2 的大小分别为 4|3|2
 * stride：如果使用交错存储顶点，2个 vec4 的 stride 为 2 * 4 * Float32Array.BYTES_PER_ELEMENTS
 * offset：交错顶点的数据偏移，1个 vec4 的偏移为 4 * Float32Array.BYTES_PER_ELEMENTS
 */
export interface AttributeBase {
  size: number,
  stride?: number,
  offset?: number,
  instanceDivisor?: number,
  normalize?: boolean,
}

export interface AttributeWithDataSource extends AttributeBase {
  /**
   * 如果使用 interleaved attribute，此字段表示数据共享的 attribute
   */
  dataSource: string,
  /**
   * use FLOAT by default
   */
  type?: BufferType,
}

/**
 * if data provided, type can be inferred from its data
 * if data not provided, type will be FLOAT by default
 * releasable is false by default,
 * if releasable set true, geometry.getAttributeData will return null after data send to gpu buffer
 *
 * 如果有 data 字段，type 会根据数据进行推断
 * 如果没有 data 字段，type 默认为 FLOAT
 * releasable 默认为 false，如果为 true，在数据被提交到 GPU buffer 后 geometry.getAttributeData 方法返回 null
 */
export interface AttributeWithData extends AttributeBase {
  data?: TypedArray,
  releasable?: boolean,
  type?: BufferType,
}

export interface AttributeWithDataPointer extends AttributeBase {
  data: BinaryPointer,
  releasable?: boolean,
  type?: BufferType,
}

export interface AttributeWithType extends AttributeBase {
  /**
   * 如果使用interleaved attribute，此字段表示数据共享的attribute
   */
  dataSource: string,
  type: BufferType,
}

export type AttributeJSON = AttributeWithDataPointer | AttributeWithType | AttributeWithDataSource;

export interface GeometryOptionsJSON {
  name?: string,
  attributes: Record<string, AttributeJSON>,
  indices?: { data: BinaryPointer, releasable?: boolean },
  mode?: GLenum,
  drawCount?: number,
  drawStart?: number,
  instanceCount?: number,
  bufferUsage?: GLenum,
  /**
   * 粒子最大数量，适用于无法更新 GPU 缓存长度的引擎接入
   */
  maxVertex?: number,
}

// TODO: any 为 Geometry
export type GeometryPointer<T extends BinaryEnv> = T extends 'studio' ? any : GeometryOptionsJSON;

/**
 * studio 中是 `Texture` 对象
 * json 中是 `GLTFTexture<'json'>` 类型，`imageFileId` 是二进制指针
 * runtime 中是 `scene.textures` 数组的 `index`，`textures` 的创建由 Player 负责
 */
// TODO: any 为 Texture
export type TexturePointer<T extends BinaryEnv> = T extends 'studio' ? any : number;

export type SkyboxCubeTexturePointer<T extends BinaryEnv> = T extends 'studio' ? any : number;

export type ModelAnimationTrackDataPointer<T extends BinaryEnv> = Binary<Float32Array, Float32Array, T>;
