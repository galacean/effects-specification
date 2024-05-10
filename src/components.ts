import type { Vector2Data } from './item/base-item';

export enum DataType {
  VFXItemData = 'VFXItemData',
  EffectComponent = 'EffectComponent',
  Material = 'Material',
  Shader = 'Shader',
  SpriteComponent = 'SpriteComponent',
  ParticleSystem = 'ParticleSystem',
  InteractComponent = 'InteractComponent',
  CameraController = 'CameraController',
  Geometry = 'Geometry',
  Texture = 'Texture',
  AnimationClip = 'AnimationClip',
  TextComponent = 'TextComponent',

  // FIXME: 先完成ECS的场景转换，后面移到spec中
  MeshComponent = 'MeshComponent',
  SkyboxComponent = 'SkyboxComponent',
  LightComponent = 'LightComponent',
  CameraComponent = 'CameraComponent',
  ModelPluginComponent = 'ModelPluginComponent',
  TreeComponent = 'TreeComponent',
}

export interface DataPath {
  id: string,
}

export interface EffectsObjectData {
  id: string,
  name?: string,
  dataType: DataType,
}

export interface ComponentData extends EffectsObjectData {
  item: DataPath,
}

export interface ColorData {
  r: number,
  g: number,
  b: number,
  a: number,
}

export interface Vector4Data {
  x: number,
  y: number,
  z: number,
  w: number,
}

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

export interface GeometryData extends EffectsObjectData {
  vertexData: VertexData,
  indexFormat: number,
  indexOffset: number,
  subMeshes: SubMesh[],
  /**
   * 模型绘制模式，默认为 GeometryType.TRIANGLES（三角形）
   * @default GeometryType.TRIANGLES
   */
  mode: GeometryType,
  /**
   * 存放 position, uv, normal, indices 的打包数据
   */
  buffer: string,
  /**
   * 所有的骨骼名称
   */
  boneNames?: string[],
  rootBoneName?: string,
  inverseBindMatrices?: number[],
}

interface SubMesh {
  offset: number,
  count: number,
}

export enum GeometryType {
  /**
   * Draw single points.
   */
  POINTS,
  /**
   * Draw lines. Each vertex connects to the one after it.
   */
  LINES,
  /**
   * Draw lines. Each set of two vertices is treated as a separate line segment.
   */
  LINE_LOOP,
  /**
   * Draw a connected group of line segments from the first vertex to the last.
   */
  LINE_STRIP,
  /**
   * Draw triangles. Each set of three vertices creates a separate triangle.
   */
  TRIANGLES,
  /**
   * Draw a connected strip of triangles.
   */
  TRIANGLE_STRIP,
  /**
   * Draw a connected group of triangles. Each vertex connects to the previous and the first vertex in the fan.
   */
  TRIANGLE_FAN,
}

export interface VertexData {
  vertexCount: number,
  channels: VertexChannel[], // channel 存放顺序 position, uv, normal
}

export enum VertexFormatType {
  Float32,
  Int16,
  Int8,
  UInt16,
  UInt8,
}

export enum IndexFormatType {
  UInt16,
  UInt32,
}

export interface VertexChannel {
  semantic: string,
  offset: number,
  format: VertexFormatType,
  dimension: number,
  normalize?: boolean,
}

export enum VertexBufferSemantic {
  Positon = 'position',
  Uv = 'uv',
  Uv2 = 'uv2',
  Normal = 'normal',
  Tangent = 'tangent',
  Color = 'color',
  BoneIndices = 'boneIndices',
  BoneWeights = 'boneWeights'
}

export interface ShaderData extends EffectsObjectData {
  vertex: string,
  fragment: string,
  properties?: string,
}

export interface EffectComponentData extends ComponentData {
  _priority: number,
  materials: DataPath[],
  geometry: DataPath,
}

export interface EffectsPackageData {
  fileSummary: FileSummary,
  exportObjects: EffectsObjectData[],
}

export interface FileSummary {
  guid: string,
  assetType: string,
}
