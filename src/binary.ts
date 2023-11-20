import type { RenderLevel } from './type';
import type { ValueType } from './numberExpression';

/**
 * index: 指向 json 中 bins 数组
 * start: 二进制开始的 byte 偏移，默认为 0
 * byteLength: 二进制内容的长度，如果没有提供，为 start 之后剩余的全部长度
 * type: 如果提供了类型，这段数据会被解释为特定类型的 TypedArray
 *
 * 假设类型 `{ baseTexture: Binary<ImageBitmap> }`
 * 实际 json 为：
 * {
 *   baseTexture: [20,[0,0]],
 *   bins: [{url:'xxx'}]
 * }
 * 通过 `bins[0].url` 请求网络，获得二进制，利用二进制创建 ImageBitmap 对象，将 JSON 转化为：
 * {
 *   baseTexture: ImageBitmap
 * }
 */
export type BinaryPointerContent = [index: number, start?: number, byteLength?: number, type?: BinaryType];
export type BinaryPointer = [ValueType.BINARY, BinaryPointerContent];
export type BinaryType = 'u8' | 'i8' | 'i16' | 'u16' | 'f32' | 'u32' | 'i32' | 'f64' | string;

/**
 * 线上二进制地址
 */
export interface BinaryFile {
  url: string,
  renderLevel?: RenderLevel,
}

export type BinaryEnv = 'studio' | 'runtime' | 'json';

/**
 * 类型模板，根据 runtime/studio/json 环境区别类型
 * type TexturePointer<T extends BinaryEnv> = Binary<Texture, HTMLImage, T>;
 * let runTimeTex: TexturePointer<'runtime'> // type: HTMLImage
 * let studioTex: TexturePointer<'studio'> // type: Texture
 * let jsonTex: TexturePointer<'json'> // binary pointer: [20,[0,0]]
 */
export type Binary<STUDIO, RUNTIME, ENV extends BinaryEnv> = ENV extends 'json' ? BinaryPointer : (ENV extends 'studio' ? STUDIO : RUNTIME);

/**
 * 二进制合并
 * 如果有多个二进制，在发布的时候可以合并二进制，并且替换掉，
 * 如下是两个二进制指针，分别代表两张图片：
 * {
 *   baseTexture: [20,[0,0]],
 *   normalTexture: [20,[1,0]],
 *   atlas: [20,[0]],
 *   json: [20,[1]],
 *   bins: [{url:'https://url/1'},{url:'https://url/2'}]
 * }
 * 遍历 JSON 数据中 `[20,pointer]` 的数据，将 `bins` 合并后得到更大的 `bin` 文件，
 * 替换掉二进制指针的数据即可：
 * {
 *   baseTexture: [20,[0,0,10086]],
 *   normalTexture: [20,[0,10087]],
 *   atlas: [20,[0,0,345]],
 *   json: [20,[0,346]],
 *   bins: [{url:'https://url/3'}]
 * }
 */
export type TypedArray =
  | Float32Array
  | Float64Array
  | Uint8Array
  | Uint32Array
  | Uint16Array
  | Int8Array
  | Int16Array
  | Int32Array
  ;
