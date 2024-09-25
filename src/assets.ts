import type { TemplateContent } from './image';
import type { RenderLevel } from './type';

export interface AssetBaseOptions {
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
 * 纹理贴图属性
 */
export interface Image extends AssetBaseOptions {
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
