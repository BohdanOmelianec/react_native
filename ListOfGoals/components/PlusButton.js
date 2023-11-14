import { StyleSheet, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';


const PlusButton = ({ onPressHandler }) => {
  return (
    <Pressable onPress={onPressHandler} style={styles.addButton}>
      <AntDesign name="pluscircle" size={80} color="#41ece3" />
    </Pressable>
  );
}

export default PlusButton;

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    bottom: 50,
    right: 30,
  }
});
