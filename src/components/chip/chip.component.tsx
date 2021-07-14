import React from "react";
import {
  Image,
  Pressable,
  PressableAndroidRippleConfig,
  Text,
  View,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS } from "../../colors";
import { styles } from "./chip.styles";

interface Props {
  title?: string;
  onClose?(): void;
  isPlaceholder?: boolean;
  closeButtonAndroidRipple?: PressableAndroidRippleConfig;
}

export const Chip = (props: Props) => {
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
