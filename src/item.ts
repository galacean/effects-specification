import type { NullItem } from './item/null-item';
import type { SpineItem } from './item/spine-item';
import type { SpriteItem } from './item/sprite-item';
import type { PluginItem } from './item/plugin-item';
import type { ParticleItem } from './item/particle-item';
import type { InteractItem } from './item/interact-item';
import type { ModelCameraItem, ModelLightItem, ModelMeshItem, ModelSkyboxItem, ModelTreeItem } from './item/model';
import type { FilterItem } from './item/filter-item';
import type { CameraItem } from './item/camera-item';
import type { CompositionItem } from './item/composition-item';
import type { TextItem } from './item/text-item';
/**
 * Item Interface，
 * 1.0版本
 * 基类，无对应元素
 */
export type Item =
  | SpriteItem
  | ParticleItem
  | NullItem
  | PluginItem
  | InteractItem
  | FilterItem
  | CameraItem
  | TextItem
  | ModelMeshItem<'json'>
  | ModelSkyboxItem<'json'>
  | ModelTreeItem<'json'>
  | ModelLightItem
  | ModelCameraItem
  | SpineItem
  | CompositionItem
  | ModelMeshItem<'studio'>
  | ModelSkyboxItem<'studio'>
  | ModelTreeItem<'studio'>
  ;

