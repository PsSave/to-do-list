import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import { useState } from "react";
import Header from "../../components/Header";
import Tasks from "../../components/Tasks";

export default function Home() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });
  const [isPressed, setIsPressed] = useState(false);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <View style={styles.container}>
        <Header />
        <View style={styles.tasksContainer}>
          <View style={styles.newTask}>
            <TextInput
              style={styles.inputText}
              placeholder={"Adicione uma nova tarefa"}
              placeholderTextColor={"#808080"}
            />
            <TouchableOpacity
              style={[styles.button, isPressed && styles.buttonHover]}
              onPressIn={() => setIsPressed(true)}
              onPressOut={() => setIsPressed(false)}
              activeOpacity={0.8}
              onPress={() => console.log("Button pressed")}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
          <Tasks />
        </View>
      </View>
    </>
  );
}
