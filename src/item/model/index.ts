export * from './skybox';
export * from './light';
export * from './mesh';
export * from './tree';
export * from './camera';
export * from './material';
export * from './binary';
export * from './render';

/***
 * 一个 meshItem 打包出来的 json 案例：
 *
 * {
 *   type:'mesh',
 *   pluginName:'model',
 *   content:{
 *     options:{
 *       skins:{},
 *       primitives:[
 *         {
 *           material:{
 *           baseColorFactor:[0,0.5,1,1],
 *           baseColorTexture: {
 *              magFilter:33071,
 *              imageFileId:[0,556,1342]
 *            }
 *           },
 *           geometry:[0,0,556]
 *         }
 *       ]
 *     }
 *
 *   }
 * }
 * bins:[{url:'https://to/some/bin'}]
 */

