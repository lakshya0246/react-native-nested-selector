import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS } from "../../colors";

export const styles = StyleSheet.create({
  chip: {
    borderRadius: 50,
    width: "auto",
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    paddingVertical: 4,
    paddingHorizontal: 4,
    paddingLeft: 10,
    borderWidth: 1,
    minHeight: 30,
    borderColor: COLORS.primary,
  },
  placeholderChip: {
    borderStyle: "dashed",
    borderColor: "#cccccc",
    backgroundColor: "white",
    minWidth: 84,
    paddingRight: 10,
  },
  title: {
    fontSize: 14,
    alignItems: "center",
    color: COLORS.primaryDarker,
    justifyContent: "center",
    fontWeight: "600",
  },
  placeholderTitle: {
    textTransform: "capitalize",
    color: "#cccccc",
    fontWeight: "400",
  },
  closeButton: {
    borderRadius: 0,
    marginLeft: 4,
  },
  closeButtonIcon: {
    tintColor: COLORS.primaryDark,
    opacity: 0.5,
    height: 20,
    width: 20,
  },
});
