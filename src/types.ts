import { PickerProps } from "@react-native-picker/picker";
import {
  ImageStyle,
  PressableAndroidRippleConfig,
  TextStyle,
  ViewStyle,
  StyleSheet,
} from "react-native";

export interface NestedDataType {
  value: string | number;
  label: string;
  children?: NestedDataType[];
}

export interface NestedSelectorProps {
  /**
   * Data options to be selected from
   */
  nestedData: NestedDataType[];
  /**
   * Renders placeholder chip with the current level name, helpful for giving a cue to the user about the current level.
   * Provide only for symmetrical data, that has clearly defined hierarchy of levels.
   */
  levels?: string[];
  /**
   * Fired when confirm button is pressed
   * @param selected
   */
  onSelectConfirm?(selected: NestedDataType[]): void;
  /**
   * Fired when selection changes
   * @param selected
   */
  onSelect?(selected: NestedDataType[]): void;
}

export interface ChipProps {
  title?: string;
  /**
   * Fired when the close button is clicked
   */
  onClose?(): void;
  /**
   * Renders a chip without a close button and with a dotted border
   */
  isPlaceholder?: boolean;
  /**
   * Ripple config for close button on the chip
   */
  closeButtonAndroidRipple?: PressableAndroidRippleConfig;
}

export interface SelectOption {
  value: string | number;
  label: string;
}
export interface SelectProps {
  options: NestedDataType[];
  /**
   * Current state of the select
   */
  value?: NestedDataType;
  /**
   * Fired when selection is changed
   */
  onSelect?(selected: NestedDataType): void;
  /**
   * Fired when confirm button is pressed
   */
  onBack?(): void;
  /**
   * Fired when confirm button is pressed
   */
  onConfirm?(): void;
  selectProps?: PickerProps;
  hideBackButton?: boolean;
  hideConfirmButton?: boolean;
  /**
   * Ripple config for the back and confirm buttons
   */
  actionButtonAndroidRipple?: PressableAndroidRippleConfig;
}
