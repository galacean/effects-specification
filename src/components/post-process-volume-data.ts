export interface PostProcessVolumeData {
  bloomEnabled: boolean,
  threshold: number,
  bloomIntensity: number,

  // ColorAdjustments
  brightness: number,
  saturation: number,
  contrast: number,

  // Vignette
  vignetteIntensity: number,
  vignetteSmoothness: number,
  vignetteRoundness: number,

  // ToneMapping
  toneMappingEnabled: boolean,
}