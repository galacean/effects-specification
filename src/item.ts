import type { NullItem } from './item/null-item';
import type { SpineItem } from './item/spine-item';
import type { SpriteItem } from './item/sprite-item';
import type { PluginItem } from './item/plugin-item';
import type { ParticleItem } from './item/particle-item';
import type { InteractItem } from './item/interact-item';
import type { ModelCameraItem, ModelLightItem, ModelMeshItem, ModelSkyboxItem, ModelTreeItem } from './item/model';
import type { CameraItem } from './item/camera-item';
import type { CompositionItem } from './item/composition-item';
import type { TextItem } from './item/text-item';
import type { VideoItem } from './item/video-item';
import type { AudioItem } from './item/audio-item';

/**
 * Item 基类，无对应元素
 */
export type Item =
  | SpriteItem
  | ParticleItem
  | NullItem
  | PluginItem
  | InteractItem
  | CameraItem
  | TextItem
  | VideoItem
  | AudioItem
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

