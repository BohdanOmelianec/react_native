import { StyleSheet, Text, View, Pressable } from "react-native";
import Colors from "../../constants/colors";

const CustomButton = (props) => {
  const { children, onPressHandler } = props;

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={onPressHandler}
        android_ripple={{ color: Colors.btnPressed }}
        style={({ pressed }) =>
          pressed
            ? [styles.pressableContainer, styles.pressed]
            : styles.pressableContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 8,
    elevation: 3,
    overflow: "hidden",
  },
  pressableContainer: {
    backgroundColor: Colors.btnDefault,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonText: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
  pressed: {
    backgroundColor: Colors.btnPressed,
  },
});
