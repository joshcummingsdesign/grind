"use client";

import { useState, useEffect } from "react";
import { UserProgress } from "@/types";

const STORAGE_KEY = "grind-progress";

const defaultProgress: UserProgress = {
  currentWorkoutIndex: 0,
  phaseLevels: {},
  completedDates: [],
  lastReps: {},
  lastMiles: 0,
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

  const completeWorkout = (
    workoutId: string,
    reps: number[],
    miles: number,
  ) => {
    const today = new Date().toISOString().split("T")[0];
    setProgress((prev) => ({
      ...prev,
      currentWorkoutIndex: (prev.currentWorkoutIndex + 1) % 6,
      completedDates: prev.completedDates.includes(today)
        ? prev.completedDates
        : [...prev.completedDates, today],
      lastReps: { ...prev.lastReps, [workoutId]: reps },
      lastMiles: miles,
    }));
  };

  const setPhaseLevel = (workoutId: string, phase: string, level: number) => {
    setProgress((prev) => ({
      ...prev,
      phaseLevels: {
        ...prev.phaseLevels,
        [workoutId]: {
          ...prev.phaseLevels[workoutId],
          [phase]: level,
        },
      },
    }));
  };

  return {
    progress,
    isLoaded,
    completeWorkout,
    setPhaseLevel,
  };
};
