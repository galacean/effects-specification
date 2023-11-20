import { ensureFixedNumber, ensureFixedVec3, forEach } from './utils';
import type { FilterParams } from '../src/item/filter-item';

const convertParams = [
  'strength',
  'bloomAddon',
  'colorAddon',
  'period',
  'waveMovement',
  'colorThreshold',
  'xOpacity',
  'yOpacity',
  'feather',
];
const pathParams = [
  'path', 'position',
];

export function getStandardFilterContent (filter: any): FilterParams {
  const ret: Record<string, any> = {};

  forEach(filter, function (val, key) {
    if (convertParams.includes(key)) {
      ret[key] = ensureFixedNumber(val);
    } else if (pathParams.includes(key)) {
      ret[key] = ensureFixedVec3(val);
    } else {
      ret[key] = val;
    }
  });

  return ret as FilterParams;
}
