import type { DataPath } from '../component-data';
import type { BaseButtonData } from './base-button-data';
import type { HorizontalAlignment, VerticalAlignment } from './serialized-enums';

export interface ButtonData extends BaseButtonData {
  text?: string,
  icon?: DataPath | null,
  flat?: boolean,
  clipText?: boolean,
  expandIcon?: boolean,
  textAlignment?: HorizontalAlignment,
  iconAlignment?: HorizontalAlignment,
  iconVerticalAlignment?: VerticalAlignment,
}
