import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export default function Header() {
  return (
    <View style={styles.background}>
      <Image source={require("../../assets/Logo.png")} />
    </View>
  );
}
