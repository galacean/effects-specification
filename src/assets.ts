import type { RenderLevel } from './type';

/**
 * 资源基类
 */
export interface AssetBase {
  /**
   * 资源 ID
   */
  id: string,
  /**
   * 资源类型
   */
  url: string,
  /**
   * 渲染等级
   * 如果没有设置，按照 B+ 处理
   */
  renderLevel?: RenderLevel,
}

/**
 * 动态换图类型
 * @since 1.1.0
 */
export enum BackgroundType {
  video = 'video',
  image = 'image',
}

/**
 * 多媒体资源类型
 * @since 2.1.0
 */
export enum MultimediaType {
  video = 'video',
  audio = 'audio',
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

export type ImageSource = Image | TemplateImage | CompressedImage;

/**
 * 纹理贴图属性
 */
export interface Image extends AssetBase {
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
   * 是否使用 mipmap
   * loader 发布压缩纹理的时候会根据此参数决定是否生成压缩纹理
   * @default false
   */
  mipmap?: boolean,
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
   * KTX2 地址
   */
  ktx2?: string,
}
