import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

type TaskProps = {
  id: number;
  text: string;
  handleRemoveTask: (id: number) => void;
};

export default function Task({ id, text, handleRemoveTask }: TaskProps) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <View style={[styles.task, id === 1 && styles.firstTask]}>
      <TouchableOpacity>
        <Image
          source={require("../../assets/Checked=false, Hover=false.png")}
        />
      </TouchableOpacity>

      <Text style={styles.textTask}>{text}</Text>
      <TouchableOpacity
        style={[styles.button, isPressed && styles.buttonHover]}
        onPress={() => handleRemoveTask(id)}
        activeOpacity={1}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
      >
        <Image
          source={
            !isPressed
              ? require(`../../assets/Delete.png`)
              : require(`../../assets/DeleteHover.png`)
          }
        />
      </TouchableOpacity>
    </View>
  );
}
