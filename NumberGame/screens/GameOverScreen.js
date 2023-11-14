import { StyleSheet, Image, View, Text } from "react-native";

import CustomButton from "../components/ui/CustomButton";
import Colors from "../constants/colors";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.gameOverContainer}>
      <Text style={styles.title}>GAME OVER</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed{" "}
        <Text style={styles.highlightedText}>{roundsNumber}</Text> rounds to
        guess the number <Text style={styles.highlightedText}>{userNumber}</Text>.
      </Text>
      <CustomButton onPressHandler={onStartNewGame} >Start New Game</CustomButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  gameOverContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 8,
    padding: 16,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: Colors.accentPurple,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
  },
  highlightedText: {
    fontFamily: "open-sans-bold",
    color: Colors.btnDefault,
  },
});
