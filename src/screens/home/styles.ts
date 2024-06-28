import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },

  tasksContainer: {
    flex: 1,
    width: "100%",
    padding: 24,
    top: -52,
  },

  newTask: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    marginBottom: 32,
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
