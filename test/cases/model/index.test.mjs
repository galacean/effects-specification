import { getStandardItem, getStandardJSON } from '../../../dist/fallback.mjs';

const { expect } = chai;

describe('model plugin items', () => {
  it('load camera item', () => {
    const item = getStandardItem({
      id: 'extra-camera',
      duration: 8,
      name: 'extra-camera',
      pn: 0,
      type: 'camera',
      transform: {
        position: [0, 0, 5],
        rotation: [0, 40, 0],
      },
      content: {
        options: {
          duration: 8,
          near: 0.1,
          far: 5000,
          fov: 60,
        },
      },
    });

    expect(item.type).to.eql('camera');
    expect(item.transform.position).to.eql([0, 0, 5]);
    expect(item.transform.rotation).to.eql([0, 40, 0]);
    expect(item.content.options).to.exist;
    expect(item.pn).to.eql(0);
    expect(item.duration).to.eql(8);
    expect(item.content.options).to.contains({
      duration: 8, near: 0.1, far: 5000, fov: 60,
    });
  });

  it('load mesh item', () => {
    const geometry = {};
    const item = getStandardItem({
      id: 'extra-camera',
      duration: 8,
      name: 'extra-camera',
      pluginName: 'model',
      type: 'mesh',
      transform: {
        position: [0, 0, 5],
        rotation: [0, 40, 0],
      },
      content: {
        options: {
          geometry,
        },
      },
    });

    expect(item.type).to.eql('mesh');
    expect(item.pluginName).to.eql('model');
    expect(item.transform).to.deep.equals({
      position: [0, 0, 5],
      rotation: [0, 40, 0],
    });
    expect(item.duration).to.eql(8);
    expect(item.content.options).to.contains({ geometry });
  });

  it('load model json', () => {
    const scn = getStandardJSON({
      compositionId: 0,
      version: '0.8.1',
      images: [],
      gltf: ['xxx'],
      _imgs: {},
      compositions: [
        {
          id: 0,
          items: [
            {
              id: 1,
              type: 'mesh',
              pluginName: 'model',
              duration: 4,
              endBehavior:5,
              content: {
                options: {
                  geometry: {},
                },
              },
            },
            {
              id: 'mesh',
              duration: 8,
              name: 'extra-camera',
              pluginName: 'model',
              type: 'mesh',
              transform: {
                position: [0, 0, 5],
                rotation: [0, 40, 0],
              },
              content: {
                options: {
                  geometry: {},
                },
              },
            },
          ],
        },
      ],
    });

    expect(scn.plugins).to.deep.equal(['model']);
    expect(scn.compositions[0].items.length).to.eql(2);
    expect(scn.compositions[0].items[0].pn).to.eql(0);
    expect(scn.compositions[0].items[0].endBehavior).to.eql(5);
    expect(scn.compositions[0].items[1].pn).to.eql(0);

    const scn08MeshFix = getStandardJSON({
      compositionId: 0,
      version: '0.8.1',
      images: [],
      gltf: ['xxx'],
      _imgs: {},
      compositions: [
        {
          id: 0,
          items: [
            {
              id: '1',
              type: 'mesh',
              pluginName: 'model',
              duration: 4,
              endBehavior:1,
              content: {
                options: {
                  geometry: {},
                },
              },
            },
            {
              id: '12',
              type: 'mesh',
              pluginName: 'model',
              duration: 4,
              endBehavior:4,
              content: {
                options: {
                  geometry: {},
                },
              },
            },
            {
              id: '13',
              type: 'light',
              pluginName: 'model',
              duration: 4,
              endBehavior:1,
              content: {
                options: {
                  geometry: {},
                },
              },
            },
            {
              id: '14',
              type: 'light',
              pluginName: 'model',
              duration: 4,
              endBehavior:4,
              content: {
                options: {
                  geometry: {},
                },
              },
            },
            {
              id: 'mesh',
              duration: 8,
              name: 'extra-camera',
              pluginName: 'model',
              type: 'mesh',
              transform: {
                position: [0, 0, 5],
                rotation: [0, 40, 0],
              },
              content: {
                options: {
                  geometry: {},
                },
              },
            },
          ],
        },
      ],
    });

    expect(scn08MeshFix.compositions[0].items[0].endBehavior).to.eql(0);
    expect(scn08MeshFix.compositions[0].items[1].endBehavior).to.eql(4);
    expect(scn08MeshFix.compositions[0].items[2].endBehavior).to.eql(0);
    expect(scn08MeshFix.compositions[0].items[3].endBehavior).to.eql(4);

    const scn18MeshFix = getStandardJSON({
      compositionId: 0,
      version: '1.8',
      images: [],
      gltf: ['xxx'],
      _imgs: {},
      compositions: [
        {
          id: 0,
          items: [
            {
              id: '1',
              type: 'mesh',
              pluginName: 'model',
              duration: 4,
              endBehavior:1,
              content: {
                options: {
                  geometry: {},
                },
              },
            },
            {
              id: '12',
              type: 'mesh',
              pluginName: 'model',
              duration: 4,
              endBehavior:4,
              content: {
                options: {
                  geometry: {},
                },
              },
            },
            {
              id: '13',
              type: 'light',
              pluginName: 'model',
              duration: 4,
              endBehavior:1,
              content: {
                options: {
                  geometry: {},
                },
              },
            },
            {
              id: '14',
              type: 'light',
              pluginName: 'model',
              duration: 4,
              endBehavior:4,
              content: {
                options: {
                  geometry: {},
                },
              },
            },
            {
              id: 'mesh',
              duration: 8,
              name: 'extra-camera',
              pluginName: 'model',
              type: 'mesh',
              transform: {
                position: [0, 0, 5],
                rotation: [0, 40, 0],
              },
              content: {
                options: {
                  geometry: {},
                },
              },
            },
          ],
        },
      ],
    });

    expect(scn18MeshFix.compositions[0].items[0].endBehavior).to.eql(0);
    expect(scn18MeshFix.compositions[0].items[1].endBehavior).to.eql(4);
    expect(scn18MeshFix.compositions[0].items[2].endBehavior).to.eql(0);
    expect(scn18MeshFix.compositions[0].items[3].endBehavior).to.eql(4);

    const scn21MeshFix = getStandardJSON({
      compositionId: 0,
      version: '2.1',
      images: [],
      gltf: ['xxx'],
      _imgs: {},
      compositions: [
        {
          id: 0,
          items: [
            {
              id: '1',
              type: 'mesh',
              pluginName: 'model',
              duration: 4,
              endBehavior:1,
              content: {
                options: {
                  geometry: {},
                },
              },
            },
            {
              id: '12',
              type: 'mesh',
              pluginName: 'model',
              duration: 4,
              endBehavior:4,
              content: {
                options: {
                  geometry: {},
                },
              },
            },
            {
              id: '13',
              type: 'light',
              pluginName: 'model',
              duration: 4,
              endBehavior:1,
              content: {
                options: {
                  geometry: {},
                },
              },
            },
            {
              id: '14',
              type: 'light',
              pluginName: 'model',
              duration: 4,
              endBehavior:4,
              content: {
                options: {
                  geometry: {},
                },
              },
            },
            {
              id: 'mesh',
              duration: 8,
              name: 'extra-camera',
              pluginName: 'model',
              type: 'mesh',
              transform: {
                position: [0, 0, 5],
                rotation: [0, 40, 0],
              },
              content: {
                options: {
                  geometry: {},
                },
              },
            },
          ],
        },
      ],
    });

    expect(scn21MeshFix.compositions[0].items[0].endBehavior).to.eql(0);
    expect(scn21MeshFix.compositions[0].items[1].endBehavior).to.eql(4);
    expect(scn21MeshFix.compositions[0].items[2].endBehavior).to.eql(0);
    expect(scn21MeshFix.compositions[0].items[3].endBehavior).to.eql(4);

    const scn22MeshFix = getStandardJSON({
      compositionId: 0,
      version: '2.2',
      images: [],
      gltf: ['xxx'],
      _imgs: {},
      compositions: [
        {
          id: 0,
          items: [
            {
              id: '1',
              type: 'mesh',
              pluginName: 'model',
              duration: 4,
              endBehavior:1,
              content: {
                options: {
                  geometry: {},
                },
              },
            },
            {
              id: '12',
              type: 'mesh',
              pluginName: 'model',
              duration: 4,
              endBehavior:4,
              content: {
                options: {
                  geometry: {},
                },
              },
            },
            {
              id: '13',
              type: 'light',
              pluginName: 'model',
              duration: 4,
              endBehavior:1,
              content: {
                options: {
                  geometry: {},
                },
              },
            },
            {
              id: '14',
              type: 'light',
              pluginName: 'model',
              duration: 4,
              endBehavior:4,
              content: {
                options: {
                  geometry: {},
                },
              },
            },
            {
              id: 'mesh',
              duration: 8,
              name: 'extra-camera',
              pluginName: 'model',
              type: 'mesh',
              transform: {
                position: [0, 0, 5],
                rotation: [0, 40, 0],
              },
              content: {
                options: {
                  geometry: {},
                },
              },
            },
          ],
        },
      ],
    });

    expect(scn22MeshFix.compositions[0].items[0].endBehavior).to.eql(1);
    expect(scn22MeshFix.compositions[0].items[1].endBehavior).to.eql(4);
    expect(scn22MeshFix.compositions[0].items[2].endBehavior).to.eql(1);
    expect(scn22MeshFix.compositions[0].items[3].endBehavior).to.eql(4);
  });
});
