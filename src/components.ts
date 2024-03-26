export enum DataType {
    VFXItemData = 0,
    EffectComponent,
    Material,
    Shader,
    SpriteComponent,
    ParticleSystem,
    InteractComponent,
    CameraController,
    Geometry,
    Texture,
    TextComponent,
  
    // FIXME: 先完成ECS的场景转换，后面移到spec中
    MeshComponent = 10000,
    SkyboxComponent,
    LightComponent,
    CameraComponent,
    ModelPluginComponent,
    TreeComponent,
  }

  export interface DataPath {
    id: string,
  }
  
  export interface EffectsObjectData {
    id: string,
    name?: string,
    dataType: string,
  }

  export interface ComponentData{
    item: DataPath,
  }
  
  export interface MaterialData extends EffectsObjectData {
    shader: DataPath,
    blending?: boolean,
    zWrite?: boolean,
    zTest?: boolean,
    floats: Record<string, number>,
    ints: Record<string, number>,
    vector4s: Record<string, { x: number, y: number, z: number, w: number }>,
    colors: Record<string, { r: number, g: number, b: number, a: number }>,
    textures?: Record<string, DataPath>,
  }
  
  export interface GeometryData extends EffectsObjectData {
    vertexData: VertexData,
    indexFormat: number,
    indexOffset: number,
    buffer: string,
  }
  
  export interface VertexData {
    vertexCount: number,
    channels: VertexChannel[],
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
    fileSummary: { guid: string, assetType: string },
    exportObjects: EffectsObjectData[],
  }
  