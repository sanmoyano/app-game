import { View } from "react-native";

import { HomeGame } from "./screens";
import { styles } from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <HomeGame />
    </View>
  );
}
