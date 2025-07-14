import React from "react";
import { View, Text, FlatList } from "react-native";
import { useWorkouts } from "@/hooks/useWorkouts";
import WorkoutCard from "@/components/WorkoutCard";
import BlueButton from '@/components/BlueButton';

export default function HomeScreen() {
  const { workouts, loading } = useWorkouts();

  if (loading) return <Text>Loading...</Text>;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <WorkoutCard
        title="Today's Workout"
        workoutName="Push Day"
        exerciseCount={3}
        onStart={() => { /* TODO: Add navigation */ }}
      />
   <BlueButton
      title="Start Workout"
      onPress={() => {}}
      />
      <Text style={{ fontSize: 20, fontWeight: "bold", marginVertical: 20 }}>
        Recent Workouts
      </Text>

      {workouts.length === 0 ? (
        <Text style={{ color: "#888" }}>No recent workouts yet.</Text>
      ) : (
        <FlatList
          data={workouts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <WorkoutCard
            title={item.routineName ?? "Workout"}
            workoutName={item.routineName ?? "Workout"}
            exerciseCount={item.exercises?.length ?? 0}
            date={item.date}
          />
          )}
        />
      )}
    </View>
  );
}
