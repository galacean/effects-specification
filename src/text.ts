/**
 * 字体资源
 * @version 2.3
 */
export interface FontDefine {
  /**
   * 字体资源链接
   */
  fontURL: string,
  /**
   * 字体名称
   */
  fontFamily: string,
}

export interface FontBase {
  /**
   * 字体
   * @default "serif"
   */
  family?: string,
  /**
   * 像素单位（unit px）
   * @default 16
   */
  size?: number,
  /**
   * @default 400
   */
  weight?: number,
  /**
   * index to fonts array, if set it inherits properties
   * 字体属性继承
   * 如果设置了会继承指定的字体属性
   */
  extends?: number, // index to fonts Array
  /**
   * url to download font file
   * 字体文件下载地址
   */
  url?: string,
  /**
   * font style
   * @default 0
   */
  style?: FontStyle,

  /**
   * space between 2 chars
   * 字间距，两个字符（包括数字，英文和空格等特殊字符）的像素距离
   * @default 0
   */
  letterSpace?: number,
}

export enum TextOverflow {
  /**
   * visible 模式下，文本内容超出边界框时，会继续显示内容，不进行裁剪或缩放。
   */
  visible = 0,
  /**
   * display 模式下，会显示所有文本，文本字号大小会根据边界框调整。
   */
  display = 1,
  /**
   * clip 模式下，当文本内容超出边界框时，多余的会被截断。
   */
  clip = 2,
  /**
   * ellipsis 模式下，会使用（...）来代替超出边界框的内容。
   */
  ellipsis = 3,
}

export enum TextSizeMode {
  /**
   * 自适应宽度
   */
  autoWidth = 0,
  /**
   * 自适应高度
   */
  autoHeight = 1,
  /**
   * 固定宽高
   */
  fixed = 2,
}

export enum TextBaseline {
  /**
   * 文本顶对齐。
   */
  top = 0,
  /**
   * 文本垂直居中对齐。
   */
  middle = 1,
  /**
   * 文本底对齐。
   */
  bottom = 2,
}

export enum TextAlignment {
  /**
   * text alignment starts from（x,y) to right direction
   * 从 (x,y) 开始第一个字符，向右边延伸
   */
  left = 0,
  /**
   * (x,y) is middle position of text, where (left + right)/2 =(x,y)
   * (x,y) 为文字中间位置，（最左位置 + 最右位置)/2 = (x,y)
   */
  middle = 1,
  /**
   * text alignment ends with（x,y) from left direction
   * 从 (x,y) 结束最后一个字符，向左边延伸
   */
  right = 2,
}

export enum TextVerticalAlign {
  /**
   * 文本顶对齐。
   */
  top = 0,
  /**
   * 文本垂直居中对齐。
   */
  middle = 1,
  /**
   * 文本底对齐。
   */
  bottom = 2,
}

/**
 * 文本字重
 */
export enum TextWeight {
  /**
   * 正常
   */
  normal = 'normal',
  /**
   * 粗体
   */
  bold = 'bold',
  /**
   * 瘦体
   */
  lighter = 'lighter',
}

/**
 * 文本样式
 */
export enum FontStyle {
  /**
   * 正常
   */
  normal = 'normal', // default
  /**
   * 斜体
   */
  italic = 'italic',
  /**
   * 倾斜体
   */
  oblique = 'oblique',
}
