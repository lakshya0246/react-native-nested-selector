import { Picker, PickerProps } from "@react-native-picker/picker";
import React from "react";
import { Pressable, Text, View, Image } from "react-native";
import { NestedDataType } from "../../types";
import { ACTION_BUTTON_RIPPLE, styles } from "./select.styles";

interface SelectOption {
  value: string | number;
  label: string;
}

interface Props {
  options: NestedDataType[];
  value?: NestedDataType;
  onSelect?(selected: NestedDataType): void;
  onBack?(): void;
  onConfirm?(): void;
  selectProps?: PickerProps;
  hideBackButton?: boolean;
  hideConfirmButton?: boolean;
}

export const Select = (props: Props) => {
  function handleSelect(_: any, selectedIndex: number) {
    if (selectedIndex === 0) {
      props.onBack?.();
    } else {
      props.onSelect?.(props.options[selectedIndex - 1]);
    }
  }

  return (
    <View style={styles.container}>
      {!props.hideBackButton && (
        <View style={styles.actionButtonContainer}>
          <Pressable
            style={styles.actionButton}
            android_ripple={ACTION_BUTTON_RIPPLE}
            onPress={props.onBack}
          >
            <Image
              style={styles.actionButtonIcon}
              source={require("./img/level-up.png")}
            />
          </Pressable>
        </View>
      )}
      <View style={styles.selectContainer}>
        <Picker
          {...props.selectProps}
          style={styles.select}
          selectedValue={props.value?.value || "default"}
          onValueChange={handleSelect}
        >
          <Picker.Item label="Select" value="select" />
          {props.options.map((option) => {
            return (
              <Picker.Item
                key={option.label}
                label={option.label}
                value={option.value}
              />
            );
          })}
        </Picker>
      </View>
      {!props.hideConfirmButton && (
        <View style={styles.actionButtonContainer}>
          <Pressable
            android_ripple={ACTION_BUTTON_RIPPLE}
            style={styles.actionButton}
            onPress={props.onConfirm}
          >
            <Image
              style={styles.actionButtonIcon}
              source={require("./img/check.png")}
            />
          </Pressable>
        </View>
      )}
    </View>
  );
};
