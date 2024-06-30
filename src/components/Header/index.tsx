import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export default function Header() {
  const [newTask, setNewTask] = useState("");
  const [newTaskFocused, setNewTaskFocused] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  return (
    <View style={styles.background}>
      <Image source={require("../../assets/Logo.png")} />
      <View style={styles.newTask}>
        <TextInput
          style={[styles.inputText, newTaskFocused && styles.inputTextFocused]}
          placeholder={"Adicione uma nova tarefa"}
          placeholderTextColor={"#808080"}
          onChange={() => setNewTask}
          onFocus={() => setNewTaskFocused(true)}
          onBlur={() => setNewTaskFocused(false)}
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
    </View>
  );
}
