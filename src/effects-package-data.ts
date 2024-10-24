import { EffectsObjectData } from "./effects-object-data";

export interface EffectsPackageData {
    fileSummary: FileSummary,
    exportObjects: EffectsObjectData[],
  }
  
  export interface FileSummary {
    guid: string,
    assetType: string,
  }
  