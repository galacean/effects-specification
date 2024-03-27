export enum DataType {
  VFXItemData = "VFXItemData",
  EffectComponent = "EffectComponent",
  Material = "Material",
  Shader = "Shader",
  SpriteComponent = "SpriteComponent",
  ParticleSystem = "ParticleSystem",
  InteractComponent = "InteractComponent",
  CameraController = "CameraController",
  Geometry = "Geometry",
  Texture = "Texture",
  TextComponent = "TextComponent",

  // FIXME: 先完成ECS的场景转换，后面移到spec中
  MeshComponent = "MeshComponent",
  SkyboxComponent = "SkyboxComponent",
  LightComponent = "LightComponent",
  CameraComponent = "CameraComponent",
  ModelPluginComponent = "ModelPluginComponent",
  TreeComponent = "TreeComponent",
}

export interface DataPath {
  id: string,
}

export interface EffectsObjectData {
  id: string,
  name?: string,
  dataType: string,
}

export interface ComponentData {
  item: DataPath,
}

export interface ColorData{
  r: number, 
  g: number, 
  b: number, 
  a: number
}

export interface Vector4Data{
  x: number, 
  y: number, 
  z: number, 
  w: number
}

export interface MaterialData extends EffectsObjectData {
  shader: DataPath,
  blending?: boolean,
  zWrite?: boolean,
  zTest?: boolean,
  ints: Record<string, number>,
  floats: Record<string, number>,
  vector4s: Record<string, Vector4Data>,
  colors: Record<string, ColorData>,
  textures: Record<string, DataPath>,
}

export interface GeometryData extends EffectsObjectData {
  vertexData: VertexData,
  indexFormat: number,
  indexOffset: number,
  buffer: string, // 数据顺序 position, uv, normal
}

export interface VertexData {
  vertexCount: number,
  channels: VertexChannel[],  // channel 存放顺序 position, uv, normal
}

export interface VertexChannel {
  offset: number,
  format: number,
  dimension: number,
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
  assetType: string
}
