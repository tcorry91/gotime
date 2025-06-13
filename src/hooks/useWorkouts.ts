import { useEffect, useState } from 'react';
import { WorkoutSession } from '@/types/workout';
import { getWorkouts } from '@/services/database';

export const useWorkouts = () => {
    const [workouts, setWorkouts] = useState<WorkoutSession[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getWorkouts(data => {
            setWorkouts(data);
            setLoading(false);
        });
    }, []);

    return { workouts, loading };
};