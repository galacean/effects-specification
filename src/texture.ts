import type { BinaryPointer } from './binary';
import { DataType } from './data-type';

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
