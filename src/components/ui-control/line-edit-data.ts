import type { HorizontalAlignment } from './serialized-enums';
import type { TextInputData } from './text-input-data';

export interface LineEditData extends TextInputData {
  secret?: boolean,
  secretCharacter?: string,
  alignment?: HorizontalAlignment,
}
