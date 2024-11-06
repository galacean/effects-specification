/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import type { BinaryEnv } from '../binary';
import {
  END_BEHAVIOR_DESTROY, END_BEHAVIOR_DESTROY_CHILDREN, END_BEHAVIOR_FORWARD,
  END_BEHAVIOR_FREEZE, END_BEHAVIOR_RESTART,
} from '../constants';
import type { Vector2Data, Vector3Data } from '../math';
import type { vec3, vec4 } from '../number-expression';
import type { ItemType, ObscuredMode, RenderLevel } from '../type';
import type { CameraContent } from './camera-item';
import type { CompositionContent } from './composition-item';
import type { EffectContent } from './effect-item';
import type { InteractContent } from './interact-item';
import type { ModelLightContent, ModelMeshItemContent, ModelTreeContent, SkyboxContent } from './model';
import type { NullContent } from './null-item';
import type { ParticleContent } from './particle-item';
import type { PluginContent } from './plugin-item';
import type { RichTextContent } from './rich-text-item';
import type { SpineContent } from './spine-item';
import type { SpriteContent } from './sprite-item';
import type { TextContent } from './text-item';

/**
 * 结束行为
 */
export enum EndBehavior {
  /**
   * 销毁
   */
  destroy = END_BEHAVIOR_DESTROY,
  /**
   * 重播
   */
  restart = END_BEHAVIOR_RESTART,
  /**
   * 无限播放
   */
  forward = END_BEHAVIOR_FORWARD,
  /**
   * 冻结
   */
  freeze = END_BEHAVIOR_FREEZE,
}

export enum ParentItemEndBehavior {
  destroyChildren = END_BEHAVIOR_DESTROY_CHILDREN
}

/**
 * 元素被遮挡/反向遮挡，需要时传入
 */
export interface ObscuredOptions {
  mode: ObscuredMode,
  ref: number,
}

/**
 * 元素的蒙版行为
 */
export interface maskOptions extends Partial<ObscuredOptions> {
  /**
   * 是否作为蒙版
   */
  mask?: boolean,
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
  endBehavior: EndBehavior | ParentItemEndBehavior,
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

export interface TransformData {
  position: Vector3Data,
  eulerHint: Vector3Data,
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
  | TextContent
  | RichTextContent
  | SpineContent
  | EffectContent
  | ModelTreeContent<BinaryEnv>
  | ModelMeshItemContent<BinaryEnv>
  | ModelLightContent
  | SkyboxContent<BinaryEnv>
  | any
  ;
