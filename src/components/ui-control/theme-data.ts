import type { ColorData } from '../../math/color-data';
import type { FontStyle } from '../../text';
import type { DataPath } from '../component-data';
import type { RectData } from './rect-data';

export type FontWeight = 'normal' | 'bold' | number;

export interface ThemeFontData {
  family: string,
  weight?: FontWeight,
  style?: FontStyle,
}

export interface StyleBoxMarginsData {
  left?: number,
  top?: number,
  right?: number,
  bottom?: number,
}

export interface StyleBoxEmptyData {
  type: 'empty',
  contentMargins?: StyleBoxMarginsData,
}

export interface StyleBoxFlatData {
  type: 'flat',
  backgroundColor?: ColorData,
  borderColor?: ColorData,
  borderWidths?: StyleBoxMarginsData,
  cornerRadii?: StyleBoxMarginsData,
  contentMargins?: StyleBoxMarginsData,
}

export interface StyleBoxTextureData {
  type: 'texture',
  texture: DataPath | null,
  sourceRect?: RectData,
  patchMargins?: StyleBoxMarginsData,
  contentMargins?: StyleBoxMarginsData,
  horizontalAxisStretchMode?: number,
  verticalAxisStretchMode?: number,
  drawCenter?: boolean,
  tint?: ColorData,
}

export type StyleBoxData = StyleBoxEmptyData | StyleBoxFlatData | StyleBoxTextureData;

export interface ThemeItemCollectionData {
  colors?: Record<string, ColorData>,
  constants?: Record<string, number>,
  fonts?: Record<string, ThemeFontData>,
  fontSizes?: Record<string, number>,
  icons?: Record<string, DataPath | null>,
  styleBoxes?: Record<string, StyleBoxData>,
}

export interface ThemeData {
  types: Record<string, ThemeItemCollectionData>,
  variations?: Record<string, string>,
}

export interface ThemeOverridesData extends ThemeItemCollectionData {}
