import { PressableAndroidRippleConfig, StyleSheet } from "react-native";
import { COLORS } from "../../colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  actionButtonIcon: {
    tintColor: COLORS.primaryLight,
    height: 24,
    width: 24,
  },
  actionButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.contrastDark,
    borderRadius: 6,
  },
  actionButtonContainer: {
    width: 52,
    height: 52,
    borderRadius: 6,
    overflow: "hidden",
  },
  selectContainer: {
    flex: 1,
    marginHorizontal: 4,
    borderColor: COLORS.contrastDark,
    borderWidth: 2,
    borderRadius: 6,
    overflow: "hidden",
  },
  select: {
    height: 48,
    borderWidth: 0,
  },
});

export const ACTION_BUTTON_RIPPLE: PressableAndroidRippleConfig = {
  color: COLORS.contrastDarker,
};
