import type { DataPath } from './components';
import { EffectsObjectData } from './effects-object-data';
import type { EndBehavior, BaseContent, TransformData } from './item/base-item';
import type { ItemType, RenderLevel } from './type';

export interface VFXItemData extends EffectsObjectData {
  /**
   * 元素 ID
   * 非预合成的元素 ID 为 int 类型的数字字符串
   * 预合成元素 ID 为 `'{ref 元素 ID}+{合成内 ID}'` 字符串
   */
  id: string,
  /**
   * 元素名称
   */
  name: string,
  /**
   * 元素时常，单位秒
   */
  duration: number,
  /**
   * 元素类型，String 类型
   * Galacean Effects 内部元素使用 int 数字字符串
   * plugin 模块实现者自由实现命名
   */
  type: ItemType,
  /**
   * 父节点 ID
   * 如果父节点无法找到，播放将直接报错
   */
  parentId?: string,
  /**
   * 元素可视状态
   * 如果为 true 或者不存在时，元素可见
   * 仅当为 false 时，元素不被创建
   */
  visible?: boolean,
  /**
   * 元素结束行为
   * @default destroy
   */
  endBehavior: EndBehavior,
  /**
   * 元素播放延时（单位秒）
   * @default 0
   */
  delay?: number,
  /**
   * 元素渲染信息属性
   */
  content: BaseContent,
  /**
   * 元素渲染等级
   */
  renderLevel?: RenderLevel,
  /**
   * 元素的插件模块名，如果不指定，则和 type 相同
   * 从数组的 plugins 中获取 name
   * 例如：pn:1, plugins:["model@1.0",'spine@1.0']
   * pn 实际为 spine
   */
  pn?: number,
  /**
   * 元素的插件模块名, 优先级高于 pn
   */
  pluginName?: string,
  /**
   * 元素的基础位置
   */
  transform?: TransformData,
  /**
   * 元素的组件数据
   */
  components: DataPath[],
}
