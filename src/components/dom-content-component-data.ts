import type { MaskableGraphicData } from './maskable-graphic-data';

/**
 * DOM 内容组件数据
 * 将 HTML/CSS 渲染为纹理，运行时由开发者通过 setContent 手动驱动
 */
export interface DomContentComponentData extends MaskableGraphicData {
  /**
   * HTML 内容字符串
   */
  htmlContent: string,
  /**
   * 内容宽度（CSS 像素）
   * @default 300
   */
  contentWidth: number,
  /**
   * 内容高度（CSS 像素）
   * @default 200
   */
  contentHeight: number,
  /**
   * 内容缩放系数，纹理尺寸 = content* × contentScale
   * @default 1
   */
  contentScale: number,
}
