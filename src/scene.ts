import type { Composition } from './composition';
import type { SpineResource } from './item/spine-item';
import type { PlayerVersion, Shape } from './type';
import type { TemplateImage, Image, CompressedImage, TextureDefine } from './image';
import type { FontBase, FontDefine } from './text';
import type { BinaryFile } from './binary';

/**
 * 场景信息
 * 素材信息存放于统一数据结构中
 */
export interface JSONScene {
  /************** 文件版本不是 Player 版本，应用于文件变更后在 editor/player 中加载时的分类处理 **************/
  /**
   * JSON 版本
   *
   * 1.1 增加数据模板 https://yuque.antfin.com/ndl7nd/mars/ib13fw
   * 1.2 增加 anchor https://yuque.antfin.com/ndl7nd/mars/dyccyr
   * 1.3 增加二进制文件格式
   * 1.5 增加 Spine 数据
   * 2.0 改造升级
   * 2.1 增加文本元素
   * 2.2 数据类型兼容
   */
  version: '1.0' | '1.1' | '1.2' | '1.3' | '1.5' | '1.8' | '2.0' | '2.1' | '2.2',
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
  images: (TemplateImage | Image | CompressedImage)[],
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
  shapes: Shape[],
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
