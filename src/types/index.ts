export type Exercise = {
  name: string;
  description: string;
  sets?: number;
  target?: string;
};

export type Workout = {
  id: string;
  name: string;
  description: string;
  phases: {
    tensionControl: { exercises: Exercise[]; alternates?: Exercise[] };
    stability: { exercises: Exercise[]; alternates?: Exercise[] };
    strength: { levels: Record<number, { exercise: Exercise }> };
    conditioning: { exercises: Exercise[]; alternates?: Exercise[] };
  };
};

export type UserProgress = {
  currentWorkoutIndex: number;
  strengthLevels: Record<string, number>;
  selectedAlternates: Record<string, Record<string, number>>;
  completedDates: string[];
  lastReps: Record<string, number[]>;
};
