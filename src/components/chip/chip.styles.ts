import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  chip: {
    borderRadius: 50,
    marginRight: 4,
    marginBottom: 4,
    width: "auto",
    flexDirection: "row",
    backgroundColor: "orange",
    paddingVertical: 4,
    paddingHorizontal: 4,
    paddingLeft: 10,
    borderWidth: 1,
    minHeight: 28,
    borderColor: "orange",
  },
  placeholderChip: {
    borderStyle: "dashed",
    borderColor: "#cccccc",
    backgroundColor: "white",
    minWidth: 84,
  },
  title: {
    fontSize: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  placeholderTitle: {
    textTransform: "capitalize",
    color: "#cccccc",
  },
  closeButton: {
    borderRadius: 0,
    marginLeft: 4,
  },
  closeButtonIcon: {
    tintColor: "blue",
    height: 20,
    width: 20,
  },
});
