import { StyleSheet } from "react-native";
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
  },
  actionButtonContainer: {
    width: 48,
    height: 48,
    borderRadius: 6,
    overflow: "hidden",
  },
  selectContainer: {
    flex: 1,
    marginHorizontal: 4,
  },
  select: {
    height: 48,
    borderRadius: 6,
  },
});

export const ACTION_BUTTON_RIPPLE = {
  color: COLORS.contrastDarker,
};
