export interface SetEntry {
    reps: number;
    weight: number;
}

export interface ExerciseEntry {
    name: string;
    sets: SetEntry[];
}

export interface WorkoutSession {
    id: string;
    date: string;
    routineName?: string;
    exercises: ExerciseEntry[];
}
