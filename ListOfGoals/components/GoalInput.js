import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Keyboard, Modal, Image } from "react-native";

const GoalInput = ({ onAddGoal, isModalOpen, toggleModal }) => {
  const [value, setValue] = useState("");

  const inputHandler = (text) => {
    setValue(text);
  }

  const addGoalHandler = () => {
    onAddGoal(value);
    setValue('');
    Keyboard.dismiss();
    toggleModal();
  }

  return (
    <Modal visible={isModalOpen} animationType='slide'>
      <View style={styles.modalContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput
          style={styles.textInput}
          placeholder="Add new goal..."
          value={value}
          onChangeText={inputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Back' color='#f31282' onPress={toggleModal}/>
          </View>
          <View style={styles.button}>
            <Button title="Add goal" onPress={addGoalHandler} disabled={!value} color='#04ccc2' />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    padding: 16,
    gap: 16,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#311b6b',
  },
  textInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  button: {
    flex: 1,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 32,
  }
})