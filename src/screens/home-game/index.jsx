import { View } from "react-native";

import { styles } from "./styles";
import { Header } from "../../components";

const HomeGame = () => {
  return (
    <View style={styles.container}>
      <Header title="Welcome" />
    </View>
  );
};

export default HomeGame;
