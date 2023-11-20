import { ItemType, ValueType } from '../../../dist/index.mjs';
import { getStandardItem, deleteEmptyValue, forEach } from '../../../dist/fallback.mjs';

const { expect } = chai;

describe('filter base', () => {
  it('filter static options', () => {
    const item = {
      type: '8',
      delay: 0.5,
      id: '3',
      parentId: '5',
      content: {
        options: {
          'startSize': 1.2,
          'sizeAspect': 0.5,
          'duration': 2,
          'renderLevel': 'S',
        },
        renderer: {
          renderMode: 1,
          shape: 0,
          maskMode: 1,
          side: 2,
        },
        transform: {
          rotation: [0, 90, 0],
          position: [0, 2, 1],
          path: [1, 0, 0],
        },
        sizeOverLifetime: {
          size: ['lines', [[0, 1], [0.5, 0], [1, 1]]],
        },
        filter: {
          name: 'gaussian',
          radius: 30,
        },
      },
    };
    const neo = getStandardItem(item);

    expect(neo).contains({
      type: ItemType.filter,
      delay: 0.5,
      duration: 2,
      parentId: '5',
      id: '3',
      renderLevel: 'S',
    });
    expect(neo.transform).to.deep.equals({
      scale: [1.2, 2.4, 1],
      rotation: [0, 90, 0],
      position: [0, 2, 1],
    });
    expect(neo.content.positionOverLifetime).to.deep
      .equals({ path: [ValueType.CONSTANT_VEC3, [1, 0, 0]] });
    expect(neo.content.renderer).to.deep.equals({
      renderMode: 1,
      shape: 0,
      maskMode: 1,
      side: 2,
    });
    expect(deleteEmptyValue(neo.content.sizeOverLifetime)).to.deep.equals({
      size: [ValueType.LINE, [[0, 1], [0.5, 0], [1, 1]]],
    });
    expect(neo.content.filter).to.deep.equals({ name: 'gaussian', radius: 30 });
  });
  it('convert filter content', () => {
    const item = {
      'name': 'filter_1',
      'delay': 0,
      'id': 2,
      'type': '8',
      'content': {
        'options': { 'duration': 5, 'startSize': 6, 'sizeAspect': 1, 'renderLevel': 'B+' },
        'renderer': { 'renderMode': 0 },
        'filter': {
          'name': 'bloom',
          'radius': 20,
          'colorThreshold': ['lines', [[0, 1], [0.5, 0], [1, 1]]],
          'bloomAddon': ['lines', [[0, 1], [0.5, 0], [1, 1]]],
          'colorAddon': ['lines', [[0, 1], [0.5, 0], [1, 1]]],
          feather: ['lines', [[0, 1], [0.5, 0], [1, 1]]],
        },
      },
      'duration': 5,
    };
    const neo = getStandardItem(item);

    expect(neo.content.filter).to.exist;
    const result = {
      name: 'bloom',
      radius: 20,
      colorThreshold: [ValueType.LINE, [[0, 1], [0.5, 0], [1, 1]]],
      bloomAddon: [ValueType.LINE, [[0, 1], [0.5, 0], [1, 1]]],
      colorAddon: [ValueType.LINE, [[0, 1], [0.5, 0], [1, 1]]],
      feather: [ValueType.LINE, [[0, 1], [0.5, 0], [1, 1]]],
    };

    forEach(neo.content.filter, (val, name) => {
      expect(val).to.deep.equals(result[name], name);
    });

  });
  it('convert path filter content', () => {
    const item = {
      'name': 'filter_4',
      'delay': 0,
      'id': 5,
      'type': '8',
      'content': {
        'options': { 'duration': 5, 'startSize': 6, 'sizeAspect': 1, 'renderLevel': 'B+' },
        'renderer': { 'renderMode': 0 },
        'filter': {
          'name': 'cameraMove',
          'position': ['path', [[[0, 0, 1, 1], [1, 1, 1, 1]], [[0, 0, 0], [1, 0, 0]]]],
        },
      },
      'duration': 5,
    };
    const neo = getStandardItem(item);

    expect(neo.content.filter.position).to.eql([ValueType.LINEAR_PATH, [[[0, 0, 1, 1], [1, 1, 1, 1]], [[0, 0, 0], [1, 0, 0]]]]);
  }
  );
});
