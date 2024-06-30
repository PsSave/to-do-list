import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type TaskProps = {
  id: number;
  text: string;
};

export default function Task({ id, text }: TaskProps) {
  return (
    <View style={[styles.task, id === 1 && styles.firstTask]}>
      <TouchableOpacity>
        <Image
          source={require("../../assets/Checked=false, Hover=false.png")}
        />
      </TouchableOpacity>

      <Text style={styles.textTask}>{text}</Text>
      <TouchableOpacity>
        <Image source={require("../../assets/Delete.png")} />
      </TouchableOpacity>
    </View>
  );
}
