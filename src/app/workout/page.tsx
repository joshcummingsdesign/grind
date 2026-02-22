"use client";

import { useState, useEffect } from "react";
import { Typography, Button, CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import { PhaseCard } from "@/components/PhaseCard";
import { ExerciseModal } from "@/components/ExerciseModal";
import { useProgress } from "@/hooks/useProgress";
import { workouts } from "@/data/workouts";
import { Exercise, Phase } from "@/types";

export default function WorkoutPage() {
  const router = useRouter();
  const { progress, isLoaded, completeWorkout, setPhaseLevel } = useProgress();
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(
    null
  );
  const [strengthReps, setStrengthReps] = useState<number[]>([0, 0, 0]);
  const [completedPhases, setCompletedPhases] = useState<
    Record<string, boolean>
  >({
    tensionControl: false,
    stability: false,
    strength: false,
    conditioning: false,
  });

  const currentWorkout = workouts[progress.currentWorkoutIndex];
  const lastReps = progress.lastReps[currentWorkout?.id];

  const getLevel = (phase: string): number => {
    return progress.phaseLevels[currentWorkout?.id]?.[phase] || 1;
  };

  const getPhaseExercises = (phase: Phase, phaseKey: string): Exercise[] => {
    const level = getLevel(phaseKey);
    return phase.levels[level]?.exercises || [];
  };

  const getMaxLevel = (phase: Phase): number => {
    const levels = Object.keys(phase.levels).map(Number);
    return Math.max(...levels);
  };

  useEffect(() => {
    if (lastReps) {
      setStrengthReps(lastReps);
    }
  }, [lastReps]);

  if (!isLoaded) {
    return (
      <LoadingContainer>
        <CircularProgress />
      </LoadingContainer>
    );
  }

  const togglePhase = (phase: string) => {
    setCompletedPhases((prev) => ({
      ...prev,
      [phase]: !prev[phase],
    }));
  };

  const allPhasesCompleted = Object.values(completedPhases).every(Boolean);

  const handleComplete = () => {
    completeWorkout(currentWorkout.id, strengthReps);
    sessionStorage.setItem("workoutJustCompleted", "true");
    router.replace("/");
  };

  return (
    <PageContainer>
      <Header>
        <Typography variant="h5">{currentWorkout.name}</Typography>
      </Header>

      <PhaseCard
        title="Tension Control"
        exercises={getPhaseExercises(currentWorkout.phases.tensionControl, "tensionControl")}
        onExerciseClick={setSelectedExercise}
        completed={completedPhases.tensionControl}
        onToggleComplete={() => togglePhase("tensionControl")}
        currentLevel={getLevel("tensionControl")}
        maxLevel={getMaxLevel(currentWorkout.phases.tensionControl)}
        onLevelChange={(level) => setPhaseLevel(currentWorkout.id, "tensionControl", level)}
      />

      <PhaseCard
        title="Stability"
        exercises={getPhaseExercises(currentWorkout.phases.stability, "stability")}
        onExerciseClick={setSelectedExercise}
        completed={completedPhases.stability}
        onToggleComplete={() => togglePhase("stability")}
        currentLevel={getLevel("stability")}
        maxLevel={getMaxLevel(currentWorkout.phases.stability)}
        onLevelChange={(level) => setPhaseLevel(currentWorkout.id, "stability", level)}
      />

      <PhaseCard
        title="Strength"
        exercises={getPhaseExercises(currentWorkout.phases.strength, "strength")}
        onExerciseClick={setSelectedExercise}
        completed={completedPhases.strength}
        onToggleComplete={() => togglePhase("strength")}
        isStrength
        strengthReps={strengthReps}
        onStrengthRepsChange={setStrengthReps}
        currentLevel={getLevel("strength")}
        maxLevel={getMaxLevel(currentWorkout.phases.strength)}
        onLevelChange={(level) => setPhaseLevel(currentWorkout.id, "strength", level)}
      />

      <PhaseCard
        title="Conditioning"
        exercises={getPhaseExercises(currentWorkout.phases.conditioning, "conditioning")}
        onExerciseClick={setSelectedExercise}
        completed={completedPhases.conditioning}
        onToggleComplete={() => togglePhase("conditioning")}
        currentLevel={getLevel("conditioning")}
        maxLevel={getMaxLevel(currentWorkout.phases.conditioning)}
        onLevelChange={(level) => setPhaseLevel(currentWorkout.id, "conditioning", level)}
      />

      <CompleteButton
        variant="contained"
        size="large"
        fullWidth
        disabled={!allPhasesCompleted}
        onClick={handleComplete}
      >
        Complete Workout
      </CompleteButton>

      <ExerciseModal
        exercise={selectedExercise}
        open={!!selectedExercise}
        onClose={() => setSelectedExercise(null)}
      />
    </PageContainer>
  );
}

const PageContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
  maxWidth: 600,
  margin: "0 auto",
  paddingBottom: theme.spacing(10),
}));

const Header = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const LoadingContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
});

const CompleteButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: 50,
  fontSize: "1.1rem",
}));
