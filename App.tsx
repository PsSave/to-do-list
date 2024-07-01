import { StatusBar } from "react-native";
import Home from "./src/screens/home";

export default function App() {
  return (
    <>
      <StatusBar barStyle={"default"} backgroundColor={"#0D0D0D"} />
      <Home />
    </>
  );
}
