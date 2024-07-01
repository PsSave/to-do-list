import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

type TaskProps = {
  id: number;
  text: string;
  isChecked: boolean;

  handleRemoveTask: (id: number) => void;
  handleCheckTask: (id: number) => void;
};

export default function Task({
  id,
  text,
  isChecked,
  handleRemoveTask,
  handleCheckTask,
}: TaskProps) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <View style={[styles.task]}>
      <TouchableOpacity activeOpacity={0.5} onPress={() => handleCheckTask(id)}>
        <Image
          source={
            !isChecked
              ? require("../../assets/Checked=false, Hover=false.png")
              : require("../../assets/Checked=true, Hover=false.png")
          }
        />
      </TouchableOpacity>

      <Text style={[styles.textTask, isChecked && styles.textChecked]}>
        {text}
      </Text>
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
