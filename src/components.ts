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
  BinaryAsset = 'BinaryAsset',

  // Timeline
  TrackAsset = 'TrackAsset',
  TimelineAsset = 'TimelineAsset',
  ObjectBindingTrack = 'ObjectBindingTrack',
  TransformTrack = 'TransformTrack',
  SpriteColorTrack = 'SpriteColorTrack',
  ActivationTrack = 'ActivationTrack',
  SubCompositionTrack = 'SubCompositionTrack',
  TransformPlayableAsset = 'TransformPlayableAsset',
  SpriteColorPlayableAsset = 'SpriteColorPlayableAsset',
  ActivationPlayableAsset = 'ActivationPlayableAsset',
  SubCompositionPlayableAsset = 'SubCompositionPlayableAsset',

  // FIXME: 先完成ECS的场景转换，后面移到spec中
  MeshComponent = 'MeshComponent',
  SkyboxComponent = 'SkyboxComponent',
  LightComponent = 'LightComponent',
  CameraComponent = 'CameraComponent',
  ModelPluginComponent = 'ModelPluginComponent',
  TreeComponent = 'TreeComponent',
  AnimationComponent = 'AnimationComponent',
  SpineComponent = 'SpineComponent',

  // Non-EffectObject
  TimelineClip = 'TimelineClip',
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
  indexFormat: IndexFormatType,
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

export interface SubMesh {
  offset: number,
  indexCount?: number,
  vertexCount: number,
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
  Float16,
  Float32,
  Int8,
  Int16,
  Int32,
  UInt8,
  UInt16,
  UInt32,
}

export enum IndexFormatType {
  None = -1,
  UInt8,
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

// BINORMAL[n]	Binormal	float4
// BLENDINDICES[n]	混合索引	uint
// BLENDWEIGHT[n]	混合权重	FLOAT
// COLOR[n]	漫射和反射颜色	float4
// NORMAL[n]	法向矢量	float4
// POSITION[n]	对象空间中的顶点位置。	float4
// POSITIONT	变换的顶点位置。	float4
// PSIZE[n]	点大小	FLOAT
// TANGENT[n]	正切	float4
// TEXCOORD[n]	纹理坐标	float4
// POSITION_BS[n]	Blend Shape 空间中的顶点位置	float4
// NORMAL_BS[n]	Blend Shape 空间中的法向矢量	float4
// TANGENT_BS[n]	Blend Shape 空间中的正切矢量	float4
export enum VertexBufferSemantic {
  Position = 'POSITION',
  Uv = 'TEXCOORD0',
  Uv2 = 'TEXCOORD1',
  Normal = 'NORMAL',
  Tangent = 'TANGENT',
  Color = 'COLOR',
  Joints = 'JOINTS',
  Weights = 'WEIGHTS',
  //
  PositionBS0 = 'POSITION_BS0',
  PositionBS1 = 'POSITION_BS1',
  PositionBS2 = 'POSITION_BS2',
  PositionBS3 = 'POSITION_BS3',
  PositionBS4 = 'POSITION_BS4',
  PositionBS5 = 'POSITION_BS5',
  PositionBS6 = 'POSITION_BS6',
  PositionBS7 = 'POSITION_BS7',
  NormalBS0 = 'NORMAL_BS0',
  NormalBS1 = 'NORMAL_BS1',
  NormalBS2 = 'NORMAL_BS2',
  NormalBS3 = 'NORMAL_BS3',
  TangentBS0 = 'TANGENT_BS0',
  TangentBS1 = 'TANGENT_BS1',
  TangentBS2 = 'TANGENT_BS2',
  TangentBS3 = 'TANGENT_BS3',
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
