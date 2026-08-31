import type { DataType } from '../../data-type';

export type UIControlType =
  DataType.Control |
  DataType.Container |
  DataType.HBoxContainer |
  DataType.VBoxContainer |
  DataType.GridContainer |
  DataType.PanelContainer |
  DataType.MarginContainer |
  DataType.CenterContainer |
  DataType.AspectRatioContainer |
  DataType.ScrollContainer |
  DataType.HScrollBar |
  DataType.VScrollBar |
  DataType.HSeparator |
  DataType.VSeparator |
  DataType.Label |
  DataType.LineEdit |
  DataType.TextEdit |
  DataType.PopupPanel |
  DataType.PopupMenu |
  DataType.MenuButton |
  DataType.OptionButton |
  DataType.ColorPicker |
  DataType.ColorPickerButton |
  DataType.TextureRect |
  DataType.NinePatchRect |
  DataType.ColorRect |
  DataType.Panel |
  DataType.ProgressBar |
  DataType.Button |
  DataType.Checkbox |
  DataType.CheckButton |
  DataType.HSlider |
  DataType.VSlider;
