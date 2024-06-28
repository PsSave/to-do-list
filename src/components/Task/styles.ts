import { StyleSheet } from "react-native";

const colors = {
  background: "#0D0D0D",
};

export const styles = StyleSheet.create({
  background: {
    height: 173,
    width: "100%",
    backgroundColor: colors.background,
    padding: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
});
