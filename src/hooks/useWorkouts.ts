import { useEffect, useState } from 'react';
import { WorkoutSession } from '@/types/workout';
import { getWorkouts } from '@/services/database';


const dummyWorkouts: WorkoutSession[] = [
    {
      id: "1",
      date: "2025-07-05",
      routineName: "Push Day",
      exercises: [
        {
          name: "Bench Press",
          sets: [
            { reps: 10, weight: 60 },
            { reps: 8, weight: 65 }
          ]
        },
        {
          name: "Shoulder Press",
          sets: [
            { reps: 12, weight: 40 }
          ]
        }
      ]
    },
    {
      id: "2",
      date: "2025-07-04",
      routineName: "Pull Day",
      exercises: [
        {
          name: "Deadlift",
          sets: [
            { reps: 5, weight: 100 }
          ]
        }
      ]
    }
  ];
  

export const useWorkouts = () => {
    const [workouts] = useState<WorkoutSession[]>(dummyWorkouts);
    const loading = false;
    return { workouts, loading };
};