import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

const Card = ({ children }) => {

  return (
    <View style={styles.card}>
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    padding: 16,
    backgroundColor: Colors.accentPurple,
    borderRadius: 24,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
