import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans',
    fontSize: 24,
    color: Colors.accentYellow,
  },
});
