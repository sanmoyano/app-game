import { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

import { styles } from "./styles";
import { Header, Card } from "../../components";
import { theme } from "../../constants";

const HomeGame = () => {
  const [numberOption, setNumberOption] = useState("");
  const onHandlerChangeText = (text) => {
    setNumberOption(text.replace(/[^0-9]/g, ""));
  };
  const onHandlerConfirm = () => {
    const choosenNumber = Number(numberOption);
  };

  return (
    <View style={styles.container}>
      <Header title="Welcome" />
      <Text style={styles.title}>Star Game</Text>
      <Card style={styles.inputContainer}>
        <Text style={styles.label}>Write a number</Text>
        <TextInput
          placeholder="0"
          style={styles.input}
          keyboardType="number-pad"
          maxLength={2}
          autoCapitalize="none"
          autoCorrect={false}
          blurOnSubmit
          onChangeText={onHandlerChangeText}
          value={numberOption}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" onPress={() => {}} color={theme.colors.primary} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" onPress={() => {}} color={theme.colors.primary} />
          </View>
        </View>
      </Card>
    </View>
  );
};

export default HomeGame;
