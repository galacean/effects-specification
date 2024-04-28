import type { JSONScene } from '../src/scene';
import type { BaseContent } from '../src';
import { ItemType, ItemEndBehavior } from '../src';
import { ensureFixedNumber, ensureFixedVec3 } from './utils';

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
 * 2.5 以下版本 赫尔米特数据转换成贝塞尔数据
 */
export function version24Migration (json: JSONScene): JSONScene {
  // 曲线转换成贝塞尔
  json.compositions.map((comp: any) => {
    for (const item of comp.items) {
      convertParam(item.content);
    }
  });

  return json;
}

export function convertParam (content: BaseContent | undefined | null) {
  if (!content) {
    return;
  }
  for (const key of Object.keys(content)) {
    const value = content[key];
    const isArray = Array.isArray(value);

    if (isArray && value.length === 2 && Array.isArray(value[1])) {
      if (key === 'path') {
        content[key] = ensureFixedVec3(value);
      } else {
        content[key] = ensureFixedNumber(value);
      }
    } else if (!isArray && typeof value === 'object') {
      convertParam(value);
    }
  }
}
