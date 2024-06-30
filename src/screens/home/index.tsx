import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import Tasks from "../../components/Tasks";

export default function Home() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });
  const [newTask, setNewTask] = useState("");
  const [newTaskFocused, setNewTaskFocused] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <View style={styles.container}>
        <Header />
        <View style={styles.tasksContainer}>
          <Tasks />
        </View>
      </View>
    </>
  );
}
