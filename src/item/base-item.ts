import type { FilterContent } from '../../src/item/filter-item';
import {
  END_BEHAVIOR_DESTROY,
  END_BEHAVIOR_DESTROY_CHILDREN,
  END_BEHAVIOR_FREEZE,
  END_BEHAVIOR_RESTART,
} from '../constants';
import type { vec3, vec4 } from '../numberExpression';
import type { ItemType, RenderLevel } from '../type';
import type { CameraContent } from './camera-item';
import type { CompositionContent } from './composition-item';
import type { InteractContent } from './interact-item';
import type { NullContent } from './null-item';
import type { ParticleContent } from './particle-item';
import type { PluginContent } from './plugin-item';
import type { SpriteContent } from './sprite-item';
import type { TextContent } from './text-item';

export enum ItemEndBehavior {
  destroy = END_BEHAVIOR_DESTROY,
  loop = END_BEHAVIOR_RESTART,
  freeze = END_BEHAVIOR_FREEZE,
}

export enum ParentItemEndBehavior {
  destroyChildren = END_BEHAVIOR_DESTROY_CHILDREN
}

export interface BaseItem {
  /**
   * 元素 id
   * 非预合成的元素 id 为 int 类型的数字字符串
   * 预合成元素 id 为 `'{ref元素id}+{合成内id}'` 字符串
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
   * 元素类型，string 类型
   * Galacean Effects 内部元素使用 int 数字字符串
   * plugin 模块实现者自由实现命名
   * 2022.12更新: spine: "spine", 陀螺仪: "5"
   */
  type: ItemType | string,
  /**
   * 父节点ID
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
  endBehavior: ItemEndBehavior | ParentItemEndBehavior,
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
  transform?: BaseItemTransform,
}

export interface BaseItemTransform {
  /**
   * 位置
   * @default [0,0,0]
   */
  position?: vec3,
  /**
   * 欧拉角旋转
   * @default [0,0,0]
   */
  rotation?: vec3,
  /**
   * 缩放
   * @default [1,1,1]
   */
  scale?: vec3,
  /**
   * 四元素，其他库转为 Galacean Effects 的 rotation 不方便时，可以用 quat，
   * 有 quat 的情况下，忽略 rotation
   * 编辑器不提供编辑此字段，由程序生成
   */
  quat?: vec4,
}

export interface Vector3Data {
  x: number,
  y: number,
  z: number,
}

export interface Vector2Data {
  x: number,
  y: number,
}

export interface EulerData {
  x: number,
  y: number,
  z: number,
}

export interface TransformData {
  position: Vector3Data,
  eulerHint: EulerData,
  scale: Vector3Data,
  size?: Vector2Data,
  anchor?: Vector2Data,
}

export type BaseContent =
  | SpriteContent
  | ParticleContent
  | NullContent
  | InteractContent
  | PluginContent
  | CompositionContent
  | CameraContent
  | FilterContent
  | TextContent
  | any
  ;
