import { useEffect, useMemo, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import CustomButton from "../components/ui/CustomButton";
import Colors from "../constants/colors";
import Card from "../components/ui/Card";
import Title from "../components/ui/Title";
import GuessLogItem from "../components/ui/GuessLogItem";

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let min = 1;
let max = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = useMemo(
    () => generateRandomBetween(min, max, userNumber),
    [userNumber]
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    min = 1;
    max = 100
  }, []);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);

      return;
    }

    if (direction === "lower") {
      max = currentGuess;
    } else {
      min = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(min, max, currentGuess);
    setCurrentGuess(newRndNumber);
    setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds])
  };

  return (
    <View style={styles.gameContainer}>
      <Text style={styles.title}>Opponent's Guess</Text>

      <View style={styles.numberGuessContainer}>
        <Text style={styles.numberGuessText}>{currentGuess}</Text>
      </View>

      <Card>
        <Title>Higher or Lower?</Title>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <CustomButton onPressHandler={nextGuessHandler.bind(null, "lower")}>
              <Ionicons name='md-remove' size={24} color='white' />
            </CustomButton>
          </View>
          <View style={styles.button}>
            <CustomButton
              onPressHandler={nextGuessHandler.bind(null, "higher")}
            >
              <Ionicons name='md-add' size={24} color='white' />
            </CustomButton>
          </View>
        </View>
      </Card>

      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={({ item, index }) => (
            <GuessLogItem item={item} rounds={guessRounds.length - index} />
          )}
          keyExtractor={item => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    gap: 24,
    // justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'open-sans-bold',
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 8,
    padding: 16,
  },
  numberGuessContainer: {
    borderWidth: 4,
    borderColor: Colors.accentYellow,
    padding: 16,
    borderRadius: 8,
    marginBottom: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  numberGuessText: {
    fontSize: 36,
    fontFamily: 'open-sans-bold',
    color: Colors.accentYellow,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 16,
  },
  button: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 32,
  }
});
