"use client";

import { useState, useEffect } from "react";
import { UserProgress } from "@/types";

const STORAGE_KEY = "grind-progress";

const defaultProgress: UserProgress = {
  currentWorkoutIndex: 0,
  strengthLevels: {},
  selectedAlternates: {},
  completedDates: [],
  lastReps: {},
};

export const useProgress = () => {
  const [progress, setProgress] = useState<UserProgress>(defaultProgress);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setProgress(JSON.parse(stored));
      } catch {
        setProgress(defaultProgress);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }
  }, [progress, isLoaded]);

  const completeWorkout = (workoutId: string, reps: number[]) => {
    const today = new Date().toISOString().split("T")[0];
    setProgress((prev) => ({
      ...prev,
      currentWorkoutIndex: (prev.currentWorkoutIndex + 1) % 6,
      completedDates: [...prev.completedDates, today],
      lastReps: { ...prev.lastReps, [workoutId]: reps },
    }));
  };

  const setStrengthLevel = (workoutId: string, level: number) => {
    setProgress((prev) => ({
      ...prev,
      strengthLevels: { ...prev.strengthLevels, [workoutId]: level },
    }));
  };

  const setAlternate = (
    workoutId: string,
    phase: string,
    alternateIndex: number
  ) => {
    setProgress((prev) => ({
      ...prev,
      selectedAlternates: {
        ...prev.selectedAlternates,
        [workoutId]: {
          ...prev.selectedAlternates[workoutId],
          [phase]: alternateIndex,
        },
      },
    }));
  };

  return {
    progress,
    isLoaded,
    completeWorkout,
    setStrengthLevel,
    setAlternate,
  };
};
