import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type WorkoutCardProps = {
  title: string;
  workoutName: string;
  exerciseCount: number;
  onStart?: () => void;
  date?: string;
};

export default function WorkoutCard({ title, workoutName, exerciseCount, onStart }: WorkoutCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.workoutName}>{workoutName}</Text>
      <Text style={styles.count}>{exerciseCount} exercises</Text>
      <TouchableOpacity style={styles.button} onPress={onStart}>
        <Text style={styles.buttonText}>START WORKOUT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    marginHorizontal: 16,
    marginTop: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  workoutName: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 4,
  },
  count: {
    fontSize: 16,
    color: '#888',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#457DF1',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
