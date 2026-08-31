import type { ControlData } from './control-data';

export interface PopupMenuItemData {
  id: number | string,
  text: string,
  disabled?: boolean,
  separator?: boolean,
  checked?: boolean,
}

export interface PopupMenuData extends ControlData {
  items?: PopupMenuItemData[],
}
