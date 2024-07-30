import type { RenderLevel } from './type';
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

/**
 * 动态换图类型
 * @since 1.1.0
 */
export enum BackgroundType {
  video = 'video',
  image = 'image',
}

export interface TemplateContent {
  variables: Record<string, number | string>,
  /**
   * 当 template 宽高和 image 不相同时，会对 template 进行缩放，使其和 image 相同。
   */
  width: number,
  height: number,
  // 绘制 canvas 的背景图片，替换掉原来的那张图片，如果没有就不替换
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
  id: string,
  /**
   * 纹理贴图地址
   */
  url: string,
  /**
   * WebP 地址
   * 如果运行时支持 WebP，则优先使用 WebP
   */
  webp?: string,
  /**
   * AVIF 地址
   * 如果运行时支持 AVIF，则优先使用 AVIF
   * @since 2.0.0
   */
  avif?: string,
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
   * 图片 Y 轴的方向，如果 Y 轴向上（与 OpenGL 相同）则为 1
   * 如果 Y 轴向下（与 OpenGL 相反）则为 -1，图片再绘制数据模板的时候需要翻转绘制
   * @default 1
   */
  oriY?: 1 | -1,
}

/**
 * 模板贴图属性
 */
export interface TemplateImage extends Image {
  template: TemplateContent,
}

/**
 * 压缩贴图属性
 */
export interface CompressedImage extends Image {
  /**
   * 压缩贴图地址
   */
  compressed: {
    // 安卓
    astc?: string,
    pvrtc?: string,
  },
}
