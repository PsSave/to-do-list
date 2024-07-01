import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useRef, useState } from "react";

type HeaderProps = {
  setNewTask: (text: string) => void;
};

export default function Header({ setNewTask }: HeaderProps) {
  const [newTaskFocused, setNewTaskFocused] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [text, setText] = useState("");
  const inputRef = useRef<TextInput>(null);

  const handleNewTask = () => {
    setNewTask(text);
    setText("");
    setNewTaskFocused(false);
    inputRef.current?.blur();
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
          ref={inputRef}
        />
        <TouchableOpacity
          style={[styles.button, isPressed && styles.buttonHover]}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
          activeOpacity={0.8}
          onPress={handleNewTask}
        >
          <Image
            style={styles.plus}
            source={require("../../assets/plus.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
