import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tasks: {
    flex: 1,
    width: "100%",
  },

  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#333333",
    paddingBottom: 20,
    marginBottom: 15,
  },

  infoBlock: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  textCreated: {
    color: "#4EA8DE",
    fontSize: 15,
    fontFamily: "Inter_700Bold",
  },

  textConcluded: {
    color: "#8284FA",
    fontSize: 15,
    fontFamily: "Inter_700Bold",
  },

  counter: {
    color: "#F2F2F2",
    backgroundColor: "#333333",
    borderRadius: 999,
    fontSize: 12,
    width: 25,
    paddingVertical: 2,
    textAlign: "center",
  },

  listEmptyView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    marginTop: 50,
  },

  listEmptyText1: {
    textAlign: "center",
    fontSize: 15,
    color: "#808080",
    fontFamily: "Inter_700Bold",
  },

  listEmptyText2: {
    textAlign: "center",
    fontSize: 15,
    color: "#808080",
    fontFamily: "Inter_400Regular",
  },
});
