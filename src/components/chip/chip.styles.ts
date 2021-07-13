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
  },
  title: {
    fontSize: 14,
    alignItems: "center",
    justifyContent: "center",
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
