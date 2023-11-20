import type { JSONScene } from '../src/scene';
import { ItemType, ItemEndBehavior } from '../src';

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
