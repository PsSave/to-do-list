import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import Tasks from "../../components/Tasks";

export default function Home() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });
  const [newTask, setNewTask] = useState<string>("");

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <View style={styles.container}>
        <Header setNewTask={setNewTask} />
        <View style={styles.tasksContainer}>
          <Tasks newTask={newTask} />
        </View>
      </View>
    </>
  );
}
