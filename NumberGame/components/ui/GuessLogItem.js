import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

const GuessLogItem = ({ rounds, item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>#{rounds}</Text>
      <Text style={styles.text}>Opponent's Guess: {item}</Text>
    </View>
  )
};

export default GuessLogItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.accentYellow,
    borderColor: Colors.btnPressed,
    borderWidth: 2,
    borderRadius: 40,
    fontFamily: 'open-sans',
    padding: 12,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
  },
});
