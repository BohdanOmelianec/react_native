import { StyleSheet, TextInput, View, Alert, Text } from "react-native";
import CustomButton from "../components/ui/CustomButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Card from "../components/ui/Card";
import Title from "../components/ui/Title";

const StartGameScreen = ({ startGame }) => {
  const [number, setNumber] = useState("");

  const onReset = () => {
    setNumber("");
  };

  const onConfirm = () => {
    const chosenNumber = parseInt(number);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: onReset }]
      );
      return;
    }
    startGame(chosenNumber);
  };

  return (
    <View style={styles.startGameContainer}>
      <Card>
        <Title>Enter a Number</Title>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          value={number}
          onChangeText={setNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <CustomButton onPressHandler={onReset}>Reset</CustomButton>
          </View>
          <View style={styles.button}>
            <CustomButton onPressHandler={onConfirm}>Confirm</CustomButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  startGameContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    fontFamily: 'open-sans-bold',
    borderBottomWidth: 2,
    borderBottomColor: Colors.accentYellow,
    color: Colors.accentYellow,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 16,
  },
  button: {
    flex: 1,
  },
});
