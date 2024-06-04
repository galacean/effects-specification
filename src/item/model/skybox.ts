import type { BaseItem, ItemEndBehavior } from '../base-item';
import type { BinaryEnv } from '../../binary';
import type { SkyboxCubeTexturePointer } from './binary';
import type { ItemType } from '../../type';
import type { ComponentData, DataPath, Vector4Data } from '../../components';

export interface SkyboxOptions<T extends BinaryEnv> {
  /**
   * 环境光旋转
   * UI显示"环境光旋转"
   * @default { x: 0, y: 0, z: 0, w: 0 }
   */
  rotation: Vector4Data,
  // Skybox 是否渲染，UI显示"可见"
  renderable: boolean,
  // Diffuse 强度，UI显示"环境光强度"
  intensity: number,
  // Specular 强度，UI显示"环境反射强度"
  reflectionsIntensity: number,
  // SH 系数，先不在UI面板上显示
  irradianceCoeffs?: number[][],
  // 漫反射贴图，UI显示"漫反射贴图"
  diffuseImage?: SkyboxCubeTexturePointer<T>,
  // 高光贴图，UI显示"高光贴图"
  specularImage: SkyboxCubeTexturePointer<T>,
  // 高光贴图大小，UI不显示
  specularImageSize: number,
  // 高光贴图 mipmap 数，UI不显示
  specularMipCount: number,
}

export interface SkyboxContent<T extends BinaryEnv> {
  options: SkyboxOptions<T>,
}

/**
 * 天空盒元素
 */
export interface ModelSkyboxItem<T extends BinaryEnv> extends BaseItem {
  type: ItemType.skybox,
  pluginName: 'model',
  content: SkyboxContent<T>,
  endBehavior: ItemEndBehavior,
}

/**
 * 一个 skybox 打包出来：
 * {
 *   type:'skybox',
 *   content:{
 *     options:{
 *       specularImageSize:512,
 *       specularImages:[
 *        [
 *          [20,[0,0,112]],
 *          [20,[0,112,234]],
 *          [20,[0,234,367]]
 *          ...
 *        ],//mipmap 0
 *        [
 *          [20,[0,567,679]],
 *          [20,[0,679,890]]
 *        ],//mipmap 1
 *       ]
 *     }
 *   }
 * },
 * bins:[{url:'https://big/bin/'}]
 */

export interface SkyboxComponentOptions {
  // Skybox 是否渲染，UI显示"可见"
  renderable: boolean,
  // Diffuse 强度，UI显示"环境光强度"
  intensity: number,
  // Specular 强度，UI显示"环境反射强度"
  reflectionsIntensity: number,
  // SH 系数，先不在UI面板上显示（原先为二维数组，注意兼容性！！！）
  irradianceCoeffs?: number[],
  // 漫反射贴图，UI显示"漫反射贴图"
  diffuseImage?: DataPath,
  // 高光贴图，UI显示"高光贴图"
  specularImage: DataPath,
  // 高光贴图大小，UI不显示
  specularImageSize: number,
  // 高光贴图 mipmap 数，UI不显示
  specularMipCount: number,
}

export interface SkyboxComponentData extends ComponentData {
  /**
   * Skybox 是否渲染，UI显示"可见"
   */
  renderable: boolean,
  /**
   * Diffuse 强度，UI显示"环境光强度"
   */
  intensity: number,
  /**
   * Specular 强度，UI显示"环境反射强度"
   */
  reflectionsIntensity: number,
  /**
   * SH 系数，先不在UI面板上显示（原先为二维数组，注意兼容性！！！）
   */
  irradianceCoeffs?: number[],
  /**
   * 漫反射贴图，UI显示"漫反射贴图"
   */
  diffuseImage?: DataPath,
  /**
   * 高光贴图，UI显示"高光贴图"
   */
  specularImage: DataPath,
  /**
   * 高光贴图大小，UI不显示
   */
  specularImageSize: number,
  /**
   * 高光贴图 mipmap 数，UI不显示
   */
  specularMipCount: number,
}
