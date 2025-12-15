import type { Composition, CompositionData } from './composition';
import type { SpineResource } from './item/spine-item';
import type { PlayerVersion, ShapeGeometry } from './type';
import type { TextureDefine } from './texture';
import type { FontBase, FontDefine } from './text';
import type { BinaryFile } from './binary';
import type { ComponentData } from './components';
import type { VFXItemData } from './vfx-item-data';
import type { AnimationClipData } from './animation-clip-data';
import type { AssetBase, ImageSource, VideoInfo } from './assets';
import type { RenderSettings } from './render-settings';
import type { EffectsObjectData } from './effects-object-data';
import type { MaterialData } from './material-data';
import type { GeometryData } from './geometry-data';
import type { ShaderData } from './shader-data';

/**
 * JSON 版本
 */
export enum JSONSceneVersion {
  '1_0' = '1.0',
  '1_1' = '1.1', // 增加数据模板
  '1_2' = '1.2', // 增加 anchor
  '1_3' = '1.3', // 增加二进制文件格式
  '1_5' = '1.5', // 增加 Spine 数据
  '1_8' = '1.8',
  '2_0' = '2.0', // 改造升级
  '2_1' = '2.1', // 增加文本元素
  '2_2' = '2.2', // 数据类型兼容
  '2_3' = '2.3', // 新增动态视频、陀螺仪支持旋转
  '2_4' = '2.4', // 支持贝塞尔曲线
  '3_0' = '3.0', // EC 改造、移除滤镜元素
  '3_1' = '3.1', // 音视频
  '3_2' = '3.2', // 矢量动画、透明视频、增加富文本属性
  '3_3' = '3.3', // 指向型蒙版、图片/文字蒙版
  '3_4' = '3.4', // 动画状态机
  '3_5' = '3.5', // 网格形状变化动画、矢量图形填充/描边渐变色
  '3_6' = '3.6', // 支持 KTX2 纹理、H265 视频格式、文本增强
  'LATEST' = JSONSceneVersion['3_6'],
}

/**
 * runtime 2.0 之前的场景信息
 * 素材信息存放于统一数据结构中
 * @deprecated
 */
export interface JSONSceneLegacy {
  /************** 文件版本不是 Player 版本，应用于文件变更后在 editor/player 中加载时的分类处理 **************/
  /**
   * JSON 版本
   */
  version: JSONSceneVersion,
  /**
   * 播放器版本信息
   */
  playerVersion: PlayerVersion,
  /**
   * 类型为 Galacean Effects
   */
  type: 'ge',
  /*************************************** 用于加载 json 后复原合成 **************************************/
  /**
   * 选中合成ID
   * 如果没有设置，选择合成中的第一个
   */
  compositionId?: string,
  /**
   * 渲染所需合成列表
   */
  compositions: Composition[],
  /******************************** 以下皆为可复用信息，加载在对应 Manager 中 *******************************/
  /**
   * 贴图信息
   */
  images: ImageSource[],
  /**
   * 根据合成ID，每个合成用到的 image 的数组索引
   */
  imgUsage?: Record<string, number[]>,
  /**
   * 根据合成id，每个合成用到的 bin 的数组索引
   */
  binUsage?: Record<string, number[]>,
  /**
   * 蒙版形状信息
   */
  shapes: ShapeGeometry[],
  /**
   * 插件类型信息
   * 'model@1.0'
   */
  plugins: string[],
  /**
   * 保留字段
   */
  requires: SceneRequire[],
  /**
   * 字体资源
   * 数据模板下掉可以不要 FontBase[]
   */
  fonts?: FontBase[] | FontDefine[],
  /**
   * spine 资源
   * @version 1.5
   */
  spines?: SpineResource[],
  /**
   * 二进制文件地址
   * @version 1.3
   */
  bins?: BinaryFile[],
  /**
   * textures 配置
   * 从 v1.3 开始，images 数组会对应创建 textures 数组
   */
  textures?: TextureDefine[],
}

/**
 * 如果是内置模块，但是需要额外的代码引入，比如滤镜则会加入 requires 数组中
 */
export type SceneRequire = 'filter';

/**
 * 场景信息
 * 素材信息存放于统一数据结构中
 */
export interface JSONScene {
  /************** 文件版本不是 Player 版本，应用于文件变更后在 editor/player 中加载时的分类处理 **************/
  /**
   * JSON 版本
   */
  version: JSONSceneVersion,
  /**
   * 播放器版本信息
   */
  playerVersion: PlayerVersion,
  /**
   * 类型为 Galacean Effects
   */
  type: string,
  /*************************************** 用于加载 json 后复原合成 **************************************/
  /**
   * 选中合成 ID
   * 如果没有设置，选择合成中的第一个
   */
  compositionId?: string,
  /**
   * 渲染所需合成列表
   */
  compositions: CompositionData[],
  /**
   * 渲染配置
   */
  renderSettings?: RenderSettings,
  /******************************** 以下皆为可复用信息，加载在对应 Manager 中 *******************************/
  /**
   * 贴图信息
   */
  images: ImageSource[],
  /**
   * 插件类型信息
   * 'model'
   */
  plugins: string[],
  /**
   * 字体资源
   * 数据模板下掉可以不要 FontBase[]
   */
  fonts?: FontBase[] | FontDefine[],
  /**
   * 视频资源
   * @since 2.0.0
   */
  videos?: VideoInfo[],
  /**
   * 音频资源
   * @since 2.0.0
   */
  audios?: AssetBase[],
  /**
   * 二进制文件地址
   */
  bins?: BinaryFile[],
  /**
   * textures 配置
   */
  textures?: TextureDefine[],
  /**
   * 元素数据
   */
  items: VFXItemData[],
  /**
   * 组件数据
   */
  components: ComponentData[],
  /**
   * 材质数据
   */
  materials: MaterialData[],
  /**
   * 着色器数据
   */
  shaders: ShaderData[],
  /**
   * 几何体数据
   */
  geometries: GeometryData[],
  /**
   * 动画数据
   */
  animations: AnimationClipData[],
  /**
   * 分类外的资产数据
   */
  miscs: EffectsObjectData[],
}
