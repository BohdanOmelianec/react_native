import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ item, onDeleteGoal }) => {
  const deleteGoalHandler = () => {
    onDeleteGoal(item.id);
  };

  return (
    <View style={styles.listItem}>
      <Pressable
        onPress={onDeleteGoal.bind(null, item.id)}
        android_ripple={{ color: "#8c43ec" }}
        style={({ pressed }) => pressed && { color: "#8c43ec" }}
      >
        <Text style={styles.listItemText}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#5e0acc",
    borderRadius: 5,
    marginBottom: 16,
  },
  listItemText: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
});
