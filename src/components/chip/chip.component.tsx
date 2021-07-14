import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { COLORS } from "../../colors";
import { ChipProps } from "../../types";
import { styles } from "./chip.styles";

export const Chip = (props: ChipProps) => {
  if (props.isPlaceholder) {
    return (
      <View style={[styles.chip, styles.placeholderChip]}>
        <Text style={[styles.title, styles.placeholderTitle]}>
          {props.title}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.chip}>
      <Text style={styles.title}>{props.title}</Text>
      <Pressable
        style={styles.closeButton}
        android_ripple={{
          color: COLORS.primaryDark,
          borderless: true,
          radius: 14,
        }}
        onPress={() => props.onClose?.()}
      >
        <Image style={styles.closeButtonIcon} source={require("./img/x.png")} />
      </Pressable>
    </View>
  );
};
