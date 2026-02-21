export type Exercise = {
  name: string;
  description: string;
  sets?: number;
  target?: string;
};

export type Phase = {
  levels: Record<number, { exercises: Exercise[] }>;
};

export type Workout = {
  id: string;
  name: string;
  description: string;
  phases: {
    tensionControl: Phase;
    stability: Phase;
    strength: Phase;
    conditioning: Phase;
  };
};

export type UserProgress = {
  currentWorkoutIndex: number;
  phaseLevels: Record<string, Record<string, number>>;
  completedDates: string[];
  lastReps: Record<string, number[]>;
};
