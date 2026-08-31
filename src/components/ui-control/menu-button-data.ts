import type { ButtonData } from './button-data';
import type { PopupMenuItemData } from './popup-menu-data';

export interface MenuButtonData extends ButtonData {
  items?: PopupMenuItemData[],
}
