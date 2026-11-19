import type { DataPath } from './components';
import type { EffectsObjectData } from './effects-object-data';
import type { EndBehavior, BaseContent, TransformData } from './item/base-item';
import type { ItemType, RenderLevel } from './type';

export interface VFXItemData extends EffectsObjectData {
  /**
   * 场景中序列化的元素 ID
   */
  id: string,
  /**
   * 元素名称
   */
  name: string,
  /**
   * 元素时长，单位秒
   */
  duration: number,
  /**
   * 元素类型，String 类型
   * Galacean Effects 内部元素使用 int 数字字符串
   * plugin 模块实现者自由实现命名
   */
  type: ItemType,
  /**
   * 元素结束行为
   * @default destroy
   */
  endBehavior: EndBehavior,
  /**
   * 元素的组件数据
   */
  components: DataPath[],
  /**
   * 父节点 ID
   */
  parentId?: string,
  /**
   * 引用的预合成 ID
   */
  refId?: string,
  /**
   * 元素渲染等级
   */
  renderLevel?: RenderLevel,
  /**
   * 元素的基础位置
   */
  transform?: TransformData,
  /**
   * 元素的子节点列表
   */
  children?: DataPath[],

  /**
   * 元素播放延时（单位秒），视频组件用它换算合成时间对应的视频位置
   * @default 0
   */
  delay?: number,
  /**
   * 交互组件与编辑器读取的元素扩展信息
   */
  content?: BaseContent,
}
