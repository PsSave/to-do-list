import { StyleSheet } from "react-native";

const colors = {
  background: "#0D0D0D",
};

export const styles = StyleSheet.create({
  background: {
    position: "relative",
    height: 173,
    width: "100%",
    backgroundColor: colors.background,
    padding: 24,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },

  newTask: {
    position: "absolute",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    bottom: -22,
  },

  inputText: {
    flex: 1,
    height: 52,
    paddingHorizontal: 16,
    borderRadius: 6,
    fontSize: 16,
    backgroundColor: "#262626",
    color: "#F2F2F2",
    borderWidth: 1,
    borderColor: "#0D0D0D",
    fontFamily: "Inter_400Regular",
  },

  inputTextFocused: {
    borderColor: "#4EA8DE",
  },

  button: {
    width: 52,
    height: 52,
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonHover: {
    backgroundColor: "#4EA8DE",
  },

  buttonText: {
    color: "#F2F2F2",
    fontSize: 24,
  },
});
