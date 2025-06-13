import { View, Text } from "react-native";
import { useWorkouts } from "@/hooks/useWorkouts";
import { FlatList } from "react-native-gesture-handler";

export default function HomeScreen() {
  const { workouts, loading } = useWorkouts();

  if (loading) return <Text>Loading...</Text>;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        Recent Workouts
      </Text>
      <FlatList
        data={workouts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{ padding: 12, backgroundColor: "#eee", marginBottom: 10 }}
          >
            <Text>{item.date}</Text>
            <Text>{item.exercises.length} exercises</Text>
          </View>
        )}
      />
    </View>
  );
}
