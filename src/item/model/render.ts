/**
 * 3D渲染模式：将渲染过程中的中间结果输出，主要用于排查渲染效果问题，支持 pbr 和 unlit 材质
 */
export enum RenderMode3D {
  /**
   * 正常渲染
   */
  none = 'none',
  /**
   * 纹理坐标
   */
  uv = 'uv',
  /**
   * 世界坐标法线
   */
  normal = 'normal',
  /**
   * 基础颜色
   */
  basecolor = 'basecolor',
  /**
   * 基础颜色 Alpha
   */
  alpha = 'alpha',
  /**
   * 金属度
   */
  metallic = 'metallic',
  /**
   * 粗超度
   */
  roughness = 'roughness',
  /**
   * 环境遮蔽
   */
  ao = 'ao',
  /**
   * 自发光
   */
  emissive = 'emissive',
}

