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
  /**
   * 当 template 宽高和 image 不相同时，会对 template 进行缩放，使其和 image 相同。
   */
  width: number,
  height: number,
  // 绘制 canvas 的背景图片，替换掉原来的那张图片，如果没有就不替换
  background?: {
    type: BackgroundType,
    name: string,
    url: string | HTMLImageElement,
  },
}

export type TemplateVariables = Record<string, string | string[] | HTMLImageElement | HTMLImageElement[]>;
