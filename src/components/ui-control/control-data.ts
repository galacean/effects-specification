import type { vec2 } from '../../number-expression';
import type { ThemeOverridesData } from './theme-data';

/** Common serialized properties shared by every GUI control. */
export interface ControlData {
  anchorMin?: vec2,
  anchorMax?: vec2,
  offsetMin?: vec2,
  offsetMax?: vec2,
  pivot?: vec2,
  scale?: vec2,
  shear?: vec2,
  rotation?: number,
  customMinimumSize?: vec2,
  customMaximumSize?: vec2,
  horizontalSizeFlags?: number,
  verticalSizeFlags?: number,
  stretchRatio?: number,
  horizontalGrowDirection?: number,
  verticalGrowDirection?: number,
  mouseFilter?: number,
  mouseBehaviorRecursive?: number,
  mouseForcePassScrollEvents?: boolean,
  focusMode?: number,
  focusBehaviorRecursive?: number,
  defaultCursorShape?: number | string,
  clipContents?: boolean,
  themeTypeVariation?: string,
  themeOverrides?: ThemeOverridesData,
}
