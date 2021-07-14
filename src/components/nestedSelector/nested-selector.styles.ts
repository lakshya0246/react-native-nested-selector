import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {},
  chipLayout: {
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    width: "100%",
    backgroundColor: "green",
  },
  chipContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 4,
    marginBottom: 4,
  },
  connectorArrow: {
    height: 20,
    width: 20,
    tintColor: "orange",
    marginRight: 4,
  },
});
