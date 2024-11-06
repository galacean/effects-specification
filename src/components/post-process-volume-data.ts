import type { ComponentData } from './component-data';

export interface PostProcessVolumeData extends ComponentData {
  /**
   * 泛光
   */
  bloom?: Bloom,
  /**
   * 颜色调整
   */
  colorAdjustments?: ColorAdjustments,
  /**
   * 晕影
   */
  vignette?: Vignette,
  /**
   * 色调映射
   */
  tonemapping?: Tonemapping,
}

export interface PostProcessEffectSettings {
  active: boolean,
}

export interface Bloom extends PostProcessEffectSettings {
  threshold: number,
  intensity: number,
}

export interface Tonemapping extends PostProcessEffectSettings {

}

export interface ColorAdjustments extends PostProcessEffectSettings {
  brightness: number,
  saturation: number,
  contrast: number,
}

export interface Vignette extends PostProcessEffectSettings {
  intensity: number,
  smoothness: number,
  roundness: number,
}
