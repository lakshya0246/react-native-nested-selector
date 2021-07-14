import { Picker } from "@react-native-picker/picker";
import React from "react";
import { Image, Pressable, View } from "react-native";
import { COLORS } from "../../colors";
import { SelectProps } from "../../types";
import { ACTION_BUTTON_RIPPLE, styles } from "./select.styles";

export const Select = (props: SelectProps) => {
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
            android_ripple={
              props.actionButtonAndroidRipple
                ? props.actionButtonAndroidRipple
                : ACTION_BUTTON_RIPPLE
            }
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
          dropdownIconColor={COLORS.contrastDark}
          style={styles.select}
          {...props.selectProps}
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
            android_ripple={
              props.actionButtonAndroidRipple
                ? props.actionButtonAndroidRipple
                : ACTION_BUTTON_RIPPLE
            }
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
