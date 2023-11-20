// 纹理坐标变换
import type { RGBAColorValue, vec2 } from '../../numberExpression';
import type { BinaryEnv } from '../../binary';
import type { SideMode } from '../../type';
import type { TexturePointer } from './binary';

export interface ModelTextureTransform {
  offset?: vec2,
  rotation?: number,
  scale?: vec2,
}

// 材质类型
export enum MaterialType {
  unlit = 'unlit',
  pbr = 'pbr',
  // 头发材质，在 pbr 材质基础上扩展
  hair = 'hair',
}

// 混合模式
export enum MaterialBlending {
  opaque = 100, // 不透明
  masked = 101, // 遮罩
  translucent = 102, // 半透明
  additive = 103, // 叠加
}

export type MaterialOptions<T extends BinaryEnv> = MaterialUnlitOptions<T> | MaterialPBROptions<T>;

export interface MaterialUnlitOptions<T extends BinaryEnv> {
  name: string,
  type: MaterialType.unlit,
  // basecolor 颜色，RGBA 格式，各通道范围在 `[0, 255]` 之内。
  baseColorFactor: RGBAColorValue,
  // basecolor 贴图对应的 Galacean Effects 纹理对象
  baseColorTexture?: TexturePointer<T>,
  // basecolor 贴图的纹理坐标变换
  baseColorTextureTransform?: ModelTextureTransform,
  // basecolor 贴图的纹理坐标索引
  baseColorTextureCoordinate?: number,

  // 深度写入：缺省值是写入深度(true)
  depthMask?: boolean,
  // 混合模式
  blending?: MaterialBlending,
  // 正反面显示
  side?: SideMode,
  // alpha 测试值
  alphaCutOff?: number,
}

export interface MaterialPBRBaseOptions<T extends BinaryEnv> {
  name: string,

  // basecolor 颜色，RGBA 格式，各通道范围在 `[0, 255]` 之内
  baseColorFactor: RGBAColorValue,
  // basecolor 贴图对应的 Galacean Effects 纹理对象
  baseColorTexture?: TexturePointer<T>,
  // basecolor 贴图的纹理坐标变换
  baseColorTextureTransform?: ModelTextureTransform,
  // basecolor 贴图的纹理坐标索引
  baseColorTextureCoordinate?: number,

  // 是否开启高光抗锯齿，默认是 false
  useSpecularAA?: boolean,
  // 金属度系数，范围在 `[0, 1]` 之内
  metallicFactor: number,
  // 粗超度系数，范围在 `[0, 1]` 之内
  roughnessFactor: number,
  // 金属度和粗超度贴图对应的 Galacean Effects 纹理对象。其中，G 通道是粗超度，B 通道是金属度
  metallicRoughnessTexture?: TexturePointer<T>,
  // 金属度和粗超度贴图的纹理坐标变换
  metallicRoughnessTextureTransform?: ModelTextureTransform,
  // 金属度和粗超度贴图的纹理坐标索引
  metallicRoughnessTextureCoordinate?: number,

  // 法线贴图对应的文件相对路径，`.png` 文件
  normalTexture?: TexturePointer<T>,
  // 法线贴图强度系数，范围在 `[0, 1]` 之内
  normalTextureScale?: number,
  // 法线贴图的纹理坐标变换
  normalTextureTransform?: ModelTextureTransform,
  // 法线贴图的纹理坐标索引
  normalTextureCoordinate?: number,

  // 环境光遮蔽贴图对应的 Galacean Effects 纹理对象
  occlusionTexture?: TexturePointer<T>,
  // 环境光遮蔽贴图强度系数，范围在 `[0, 1]` 之内
  occlusionTextureStrength?: number,
  // 环境光遮蔽贴图的纹理坐标变换
  occlusionTextureTransform?: ModelTextureTransform,
  // 环境光遮蔽贴图的纹理坐标索引
  occlusionTextureCoordinate?: number,

  // 自发光颜色，RGB 格式，各通道范围在 `[0, 255]` 之内
  emissiveFactor: RGBAColorValue,
  // 自发光强度
  emissiveIntensity: number,
  // 自发光贴图对应的的 Galacean Effects 纹理对象
  emissiveTexture?: TexturePointer<T>,
  // 自发光贴图的纹理坐标变换
  emissiveTextureTransform?: ModelTextureTransform,
  // 自发光贴图的纹理坐标索引
  emissiveTextureCoordinate?: number,

  // 深度写入：缺省值是写入深度(true)
  depthMask?: boolean,
  // 混合模式
  blending?: MaterialBlending,
  // 正反面显示
  side?: SideMode,
  // alpha测试值
  alphaCutOff?: number,

  // 是否启用阴影效果，包括投射阴影和接收阴影
  enableShadow?: boolean,
}

export interface MaterialPBROptions<T extends BinaryEnv> extends MaterialPBRBaseOptions<T> {
  /**
   * 增加 pbr 类型参数
   */
  type: MaterialType.pbr,
}

export interface MaterialHairOptions<T extends BinaryEnv> extends MaterialPBRBaseOptions<T> {
  /**
   * 增加头发相关参数
   */
  type: MaterialType.hair,
  // 高光偏移贴图
  specularShiftTexture?: TexturePointer<T>,
  // 光泽度，范围 `[0, 1000]`
  specularPower?: number,
  // 高光强度，范围 `[0, 1]`
  specularScale?: number,
  // 高光宽度，范围 `[0, 1]`
  specularWidth?: number,
  // 主色，RGB格式，各通道范围在 `[0, 255]` 之内。
  primaryColor?: RGBAColorValue,
  // 主色偏移，范围 `[-1, 1]`
  primaryShift?: number,
  // 辅色，RGB 格式，各通道范围在 `[0, 255]` 之内。
  secondaryColor?: RGBAColorValue,
  // 辅色偏移，范围 `[-1, 1]`
  secondaryShift?: number,
}
