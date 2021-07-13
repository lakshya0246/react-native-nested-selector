import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  actionButtonIcon: {
    tintColor: "blue",
    height: 20,
    width: 20,
  },
  actionButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    backgroundColor: "orange",
    borderRadius: 6,
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
