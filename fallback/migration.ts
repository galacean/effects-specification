import type { JSONScene, JSONSceneVersion3 } from '../src/scene';
import { ItemType, ItemEndBehavior, END_BEHAVIOR_PAUSE_AND_DESTROY, END_BEHAVIOR_FREEZE, END_BEHAVIOR_PAUSE, DataType } from '../src';
import { convertAnchor, generateGUID } from './utils';

/**
 * 2.1 以下版本数据适配（mars-player@2.4.0 及以上版本支持 2.1 以下数据的适配）
 */
export function version21Migration (json: JSONScene): JSONScene {
  json.compositions.forEach(composition => {
    composition.items.forEach(item => {
      if (item.type === ItemType.null) {
        if (item.endBehavior === ItemEndBehavior.destroy) {
          item.endBehavior = ItemEndBehavior.freeze;
        }
      }
    });
  });

  json.version = '2.1';

  return json;
}

/**
 * 2.2 以下版本数据适配（mars-player@2.5.0 及以上版本支持 2.2 以下数据的适配）
 */
export function version22Migration (json: JSONScene): JSONScene {
  const singleVersion = json.version?.split('.');

  if (!singleVersion || Number(singleVersion[0]) > 2 || (Number(singleVersion[0]) === 2 && Number(singleVersion[1]) >= 2)) {
    return json;
  }

  json.compositions.forEach(composition => {
    composition.items.forEach(item => {
      if (item.type === ItemType.mesh || item.type === ItemType.light) {
        item.endBehavior = item.endBehavior as unknown === 1 ? ItemEndBehavior.destroy : item.endBehavior;
      }
    });
  });

  return json;
}

/**
 * 3.0 以下版本数据适配(runtime 2.0及以上版本支持)
 */
export function version30Migration (json: JSONScene): JSONSceneVersion3 {
  const result: JSONSceneVersion3 = Object.assign({}, json, {
    items: [],
    components: [],
    materials: [],
    shaders: [],
    geometries: [],
  });

  // 兼容老版本数据中不存在textures的情况
  result.textures ??= [];
  result.textures.forEach(textureOptions => {
    Object.assign(textureOptions, {
      id: generateGUID(),
      dataType: DataType.Texture,
    });
  });

  if (result.textures.length < result.images.length) {
    for (let i = result.textures.length; i < result.images.length; i++) {
      result.textures.push({
        //@ts-expect-error
        id: generateGUID(),
        dataType: DataType.Texture,
        source: i,
        flipY: true,
      });
    }
  }

  // 更正Composition.endBehavior
  for (const composition of json.compositions) {
    // composition 的 endbehaviour 兼容
    if (composition.endBehavior === END_BEHAVIOR_PAUSE_AND_DESTROY || composition.endBehavior === END_BEHAVIOR_PAUSE) {
      composition.endBehavior = END_BEHAVIOR_FREEZE;
    }

    const itemGuidMap: Record<string, string> = {};

    for (const item of composition.items) {
      itemGuidMap[item.id] = generateGUID();
      // TODO: 编辑器测试用，上线后删除
      //@ts-expect-error
      item.oldId = item.id;
      item.id = itemGuidMap[item.id];
    }

    composition.items.forEach((item, index) => {
      if (item.parentId) {
        if (item.parentId.includes('^')) {
          const parentId = (item.parentId).split('^')[0];
          const nodeId = (item.parentId).split('^')[1];

          item.parentId = itemGuidMap[parentId] + '^' + nodeId;
        } else {
          item.parentId = itemGuidMap[item.parentId];
        }
      }

      // @ts-expect-error fix item type
      result.items.push(item);

      // @ts-expect-error fix item type
      composition.items[index] = { id: item.id };
    });

    for (const item of result.items) {
      // 原 texture 索引转为统一 guid 索引
      if (item.content) {
        if (item.content.renderer) {
          if (item.content.renderer.texture !== undefined) {
            const oldTextureId = item.content.renderer.texture;

            //@ts-expect-error
            item.content.renderer.texture = { id: result.textures[oldTextureId].id };
          }
        }

        if (item.content.trails) {
          if (item.content.trails.texture !== undefined) {
            const oldTextureId = item.content.trails.texture;

            //@ts-expect-error
            item.content.trails.texture = { id: result.textures[oldTextureId].id };
          }
        }
      }

      // item 的 transform 属性由数组转为 {x:n, y:n, z:n}
      if (item.transform) {
        //@ts-expect-error
        const position = [...item.transform.position ?? [0, 0, 0]];
        //@ts-expect-error
        const rotation = [...item.transform.rotation ?? [0, 0, 0]] as number[];
        //@ts-expect-error
        const scale = [...item.transform.scale ?? [1, 1, 1]];

        Object.assign(item, {
          transform: {
            position: { x: position[0], y: position[1], z: position[2] },
            rotation: { x: rotation[0], y: rotation[1], z: rotation[2] },
            scale: { x: scale[0], y: scale[1], z: scale[0] },
          },
        });

        // sprite 的 scale 转为 size
        if (item.type === ItemType.sprite) {
          item.transform.size = { x: scale[0], y: scale[1] };
          item.transform.scale = { x: 1, y: 1, z: 1 };
        }

        // sprite 的 anchor 修正
        if (item.type === ItemType.sprite) {
          const content = item.content;

          if (!content.renderer) {
            content.renderer = {};
          }
          const renderer = content.renderer;
          const realAnchor = convertAnchor(renderer.anchor, renderer.particleOrigin);
          const startSize = item.transform.size;

          // 兼容旧JSON（anchor和particleOrigin可能同时存在）
          if (!renderer.anchor && renderer.particleOrigin !== undefined) {
            //@ts-expect-error
            item.transform.position.x += -realAnchor[0] * startSize.x;
            //@ts-expect-error
            item.transform.position.y += -realAnchor[1] * startSize.y;
          }
          //@ts-expect-error
          item.transform.anchor = { x: realAnchor[0] * startSize.x, y: realAnchor[1] * startSize.y };
        }
      }

      if (item.type === ItemType.particle) {
        const content = item.content;

        if (!content.renderer) {
          content.renderer = {};
        }
        const renderer = content.renderer;

        content.renderer.anchor = convertAnchor(renderer.anchor, renderer.particleOrigin);
      }

      // 动画数据转化 TODO: 动画数据移到 TimelineComponentData
      item.content.tracks = [];
      const tracks = item.content.tracks;

      if (item.type !== ItemType.particle) {
        tracks.push({
          clips: [
            {
              dataType: 'TransformAnimationPlayableAsset',
              animationClip: {
                sizeOverLifetime: item.content.sizeOverLifetime,
                rotationOverLifetime: item.content.rotationOverLifetime,
                positionOverLifetime: item.content.positionOverLifetime,
              },
            },
          ],
        });
      }

      if (item.type === ItemType.sprite) {
        tracks.push({
          clips: [
            {
              dataType: 'SpriteColorAnimationPlayableAsset',
              animationClip: {
                colorOverLifetime: item.content.colorOverLifetime,
                startColor: item.content.options.startColor,
              },
            },
          ],
        });
      }

      // gizmo 的 target id 转换为新的 item guid
      if (item.content.options.target) {
        item.content.options.target = itemGuidMap[item.content.options.target];
      }

      // item 的 content 转为 component data 加入 JSONScene.components
      const uuid = generateGUID();

      if (item.type === ItemType.sprite) {
        item.components = [];
        result.components.push(item.content);
        item.content.id = uuid;
        item.content.dataType = DataType.SpriteComponent;
        item.content.item = { id: item.id };
        item.dataType = DataType.VFXItemData;
        //@ts-expect-error
        item.components.push({ id: item.content.id });
      } else if (item.type === ItemType.particle) {
        item.components = [];
        result.components.push(item.content);
        item.content.id = uuid;
        item.content.dataType = DataType.ParticleSystem;
        item.content.item = { id: item.id };
        item.dataType = DataType.VFXItemData;
        //@ts-expect-error
        item.components.push({ id: item.content.id });
      } else if (item.type === ItemType.mesh) {
        item.components = [];
        result.components.push(item.content);
        item.content.id = uuid;
        item.content.dataType = DataType.MeshComponent;
        item.content.item = { id: item.id };
        item.dataType = DataType.VFXItemData;
        //@ts-expect-error
        item.components.push({ id: item.content.id });
      } else if (item.type === ItemType.skybox) {
        item.components = [];
        result.components.push(item.content);
        item.content.id = uuid;
        item.content.dataType = DataType.SkyboxComponent;
        item.content.item = { id: item.id };
        item.dataType = DataType.VFXItemData;
        //@ts-expect-error
        item.components.push({ id: item.content.id });
      } else if (item.type === ItemType.light) {
        item.components = [];
        result.components.push(item.content);
        item.content.id = uuid;
        item.content.dataType = DataType.LightComponent;
        item.content.item = { id: item.id };
        item.dataType = DataType.VFXItemData;
        //@ts-expect-error
        item.components.push({ id: item.content.id });
      } else if (item.type === 'camera') {
        item.components = [];
        result.components.push(item.content);
        item.content.id = uuid;
        item.content.dataType = DataType.CameraComponent;
        item.content.item = { id: item.id };
        item.dataType = DataType.VFXItemData;
        //@ts-expect-error
        item.components.push({ id: item.content.id });
      } else if (item.type === ItemType.tree) {
        item.components = [];
        result.components.push(item.content);
        item.content.id = uuid;
        item.content.dataType = DataType.TreeComponent;
        item.content.item = { id: item.id };
        item.dataType = DataType.VFXItemData;
        //@ts-expect-error
        item.components.push({ id: item.content.id });
      } else if (item.type === ItemType.interact) {
        item.components = [];
        result.components.push(item.content);
        item.content.id = uuid;
        item.content.dataType = DataType.InteractComponent;
        item.content.item = { id: item.id };
        item.dataType = DataType.VFXItemData;
        //@ts-expect-error
        item.components.push({ id: item.content.id });
      } else if (item.type === ItemType.camera) {
        item.components = [];
        result.components.push(item.content);
        item.content.id = uuid;
        item.content.dataType = DataType.CameraController;
        item.content.item = { id: item.id };
        item.dataType = DataType.VFXItemData;
        //@ts-expect-error
        item.components.push({ id: item.content.id });
      } else if (item.type === ItemType.text) {
        item.components = [];
        result.components.push(item.content);
        item.content.id = uuid;
        item.content.dataType = DataType.TextComponent;
        item.content.item = { id: item.id };
        item.dataType = DataType.VFXItemData;
        //@ts-expect-error
        item.components.push({ id: item.content.id });
      }
    }
  }

  result.version = '3.0';

  return result;
}