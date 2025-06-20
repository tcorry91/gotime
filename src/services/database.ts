import AsyncStorage from '@react-native-async-storage/async-storage';


export type Workout = {
  id: string;
  date: string;
  data: any; 
};

export const saveWorkout = async (id: string, date: string, data: any): Promise<void> => {
  const key = `workout_${id}`;
  const value = JSON.stringify({ id, date, data });
  await AsyncStorage.setItem(key, value);
};


export const getWorkouts = async (): Promise<Workout[]> => {
  const keys = await AsyncStorage.getAllKeys();
  const workoutKeys = keys.filter(k => k.startsWith('workout_'));
  const items = await AsyncStorage.multiGet(workoutKeys);
  return items
    .map(([_, v]) => (v ? JSON.parse(v) : null))
    .filter((w): w is Workout => w !== null);
};
