import type { RenderLevel } from './type';
import type { StringTemplate } from './text';
import type { BinaryPointer } from './binary';
import type { DataType } from './components';

export interface TextureFormatOptions {
  format?: GLenum,
  internalFormat?: GLenum,
  type?: GLenum,
}

export interface TextureConfigOptionsBase {
  generateMipmap?: boolean,
  id?: string,
  dataType?: DataType.Texture,
  name?: string,
  wrapS?: GLenum,
  wrapT?: GLenum,
  magFilter?: GLenum,
  minFilter?: GLenum,
  anisotropic?: number,
  flipY?: boolean,
  premultiplyAlpha?: boolean,
  // when use ImageBitMap, the bitmap content will be closed after sent to GPU
  keepImageSource?: boolean,
}

export type SerializedTextureCubeMipmap = [
  TEXTURE_CUBE_MAP_POSITIVE_X: BinaryPointer,
  TEXTURE_CUBE_MAP_NEGATIVE_X: BinaryPointer,
  TEXTURE_CUBE_MAP_POSITIVE_Y: BinaryPointer,
  TEXTURE_CUBE_MAP_NEGATIVE_Y: BinaryPointer,
  TEXTURE_CUBE_MAP_POSITIVE_Z: BinaryPointer,
  TEXTURE_CUBE_MAP_NEGATIVE_Z: BinaryPointer
];

export interface SerializedTexture2DImageSource extends TextureConfigOptionsBase, TextureFormatOptions {
  target?: WebGLRenderingContext['TEXTURE_2D'],
  source: number,
}

export interface SerializedTexture2DMipmapSource extends TextureConfigOptionsBase, TextureFormatOptions {
  target?: WebGLRenderingContext['TEXTURE_2D'],
  mipmaps: BinaryPointer[],
}

export interface SerializedTextureCube extends TextureConfigOptionsBase, TextureFormatOptions {
  target: WebGLRenderingContext['TEXTURE_CUBE_MAP'],
  mipmaps: SerializedTextureCubeMipmap[],
}

export type SerializedTexture2D = SerializedTexture2DImageSource | SerializedTexture2DMipmapSource;

export type SerializedTextureSource = SerializedTexture2D | SerializedTextureCube;

export type TextureJSONOptions = SerializedTextureSource;

export type TextureDefine = TextureJSONOptions;

export interface TemplateContentBase {
  x?: number,
  y?: number,
  variables: Record<string, number | string>,
  /**
   * 当template宽高和image不相同时，会对template进行缩放，使其和image相同。
   */
  width: number,
  height: number,
}

export interface TemplateContentV1 extends TemplateContentBase {
  /**
   * 贴图属性，svg 字段
   */
  content: string,
  asImage?: boolean,
  backgroundWidth: number,
  backgroundHeight: number,
}

/**
 * 动态换图类型
 * @since 1.3.0
 */
export enum BackgroundType {
  video = 'video',
  image = 'image',
}

export interface TemplateContentV2 extends TemplateContentBase {
  v: 2,
  content?: StringTemplate,
  background?: {
    type: BackgroundType,
    name: string,
    url: string,
  },
}

/**
 * 纹理贴图属性
 */
export interface Image {
  /**
   * 纹理贴图地址
   */
  url: string,
  /**
   * webp 地址
   * 如果运行时支持 webp，则尽量使用 webp
   */
  webp?: string,
  /**
   * 纹理贴图渲染等级
   * 如果没有设置，按照 B+ 处理
   */
  renderLevel?: RenderLevel,
  /**
   * 是否使用 mipmap
   * loader 发布压缩纹理的时候会根据此参数决定是否生成压缩纹理
   * @default false
   */
  mipmap?: boolean,
  /**
   * 图片Y轴的方向，如果Y轴向上（与OpenGL相同）则为 1
   * 如果Y轴向下（与OpenGL相反）则为 -1 ，图片再绘制数据模板的时候需要翻转绘制
   * @default 1
   */
  oriY?: 1 | -1,
}

/**
 * 模板贴图属性
 */
export interface TemplateImage extends Image {
  template: TemplateContentV1 | TemplateContentV2,
}

/**
 * 压缩贴图属性
 */
export interface CompressedImage extends Image {
  /**
   * 压缩贴图地址
   */
  compressed: {
    astc?: string, // 安卓
    pvrtc?: string,
  },
}
