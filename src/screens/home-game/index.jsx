import { View } from "react-native";

import { styles } from "./styles";
import { Header, Card } from "../../components";

const HomeGame = () => {
  return (
    <View style={styles.container}>
      <Header title="Welcome" />
      <Card />
    </View>
  );
};

export default HomeGame;
