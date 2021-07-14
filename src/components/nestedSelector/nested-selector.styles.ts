import { StyleSheet } from "react-native";
import { COLORS } from "../../colors";

export const styles = StyleSheet.create({
  container: {},
  chipLayout: {
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    width: "100%",
    marginBottom: 8,
  },
  chipContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 2,
    marginBottom: 4,
  },
  connectorArrow: {
    height: 20,
    width: 20,
    tintColor: COLORS.primaryLight,
    marginRight: 2,
  },
});
