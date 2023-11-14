import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button, Pressable, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import PlusButton from "./components/PlusButton";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  
  const addGoalHandler = (value) => {
    setGoals(prevGoals => [{text: value, id: prevGoals.length}, ...prevGoals]);
  }

  const deleteGoalHandler = (id) => {
    setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id));
  }

  const toggleModal = () => {
    setModalIsVisible(prevModalIsOpen => !prevModalIsOpen);
  }

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} isModalOpen={modalIsVisible} toggleModal={toggleModal} />
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>My goals are...</Text>
        <FlatList
          data={goals}
          renderItem={({ item }) => (
            <GoalItem item={item} onDeleteGoal={deleteGoalHandler} />
            )}
        />
      </View>
      <PlusButton onPressHandler={toggleModal} />
      <StatusBar style="dark " />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    padding: 16,
    paddingTop: 70,
  },
  listContainer: {
    flex: 1,
    paddingVertical: 16,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  addButton: {
    position: 'absolute',
    bottom: 50,
    right: 30,
  },
});
