import { StyleSheet } from "react-native";

const colors = {
  background: "#0D0D0D",
};

export const styles = StyleSheet.create({
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#262626",
    padding: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#333333",
    borderRadius: 8,
  },

  firstTask: {
    marginTop: 15,
  },

  textTask: {
    flex: 1,
    color: "#F2F2F2",
    textAlign: "left",
    fontSize: 14,
    fontFamily: "Inter_400Regular",
  },

  button: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },

  buttonHover: {
    backgroundColor: "#333333",
  },
});
