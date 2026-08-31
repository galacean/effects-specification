import type { DataType } from '../../data-type';
import type { ComponentData } from '../component-data';
import type { ControlData } from './control-data';
import type { UIControlType } from './ui-control-type';

export interface UIControlData extends ComponentData {
  dataType: DataType.UIControl,
  control: UIControlType,
  data: ControlData,
}
