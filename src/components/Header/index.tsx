import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

type HeaderProps = {
  setNewTask: (text: string) => void;
};

export default function Header({ setNewTask }: HeaderProps) {
  const [newTaskFocused, setNewTaskFocused] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [text, setText] = useState("");

  const handleNewTask = () => {
    setNewTask(text);
    setText("");
  };

  return (
    <View style={styles.background}>
      <Image source={require("../../assets/Logo.png")} />
      <View style={styles.newTask}>
        <TextInput
          style={[styles.inputText, newTaskFocused && styles.inputTextFocused]}
          placeholder={"Adicione uma nova tarefa"}
          placeholderTextColor={"#808080"}
          value={text}
          onChangeText={setText}
          onFocus={() => setNewTaskFocused(true)}
          onBlur={() => setNewTaskFocused(false)}
        />
        <TouchableOpacity
          style={[styles.button, isPressed && styles.buttonHover]}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
          activeOpacity={0.8}
          onPress={handleNewTask}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
