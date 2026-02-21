"use client";

import { useState, useEffect } from "react";
import { Typography, Button, CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import { PhaseCard } from "@/components/PhaseCard";
import { ExerciseModal } from "@/components/ExerciseModal";
import { useProgress } from "@/hooks/useProgress";
import { workouts } from "@/data/workouts";
import { Exercise } from "@/types";

export default function WorkoutPage() {
  const router = useRouter();
  const { progress, isLoaded, completeWorkout } = useProgress();
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(
    null
  );
  const [strengthReps, setStrengthReps] = useState<number[]>([0, 0, 0]);

  const currentWorkout = workouts[progress.currentWorkoutIndex];
  const strengthLevel = progress.strengthLevels[currentWorkout?.id] || 1;
  const lastReps = progress.lastReps[currentWorkout?.id];

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

  const strengthExercise =
    currentWorkout.phases.strength.levels[strengthLevel]?.exercise;

  const allRepsEntered = strengthReps.every((rep) => rep > 0);

  const handleComplete = () => {
    completeWorkout(currentWorkout.id, strengthReps);
    router.push("/");
  };

  return (
    <PageContainer>
      <Header>
        <Typography variant="h5">{currentWorkout.name}</Typography>
      </Header>

      <PhaseCard
        title="Tension Control"
        exercises={currentWorkout.phases.tensionControl.exercises}
        onExerciseClick={setSelectedExercise}
      />

      <PhaseCard
        title="Stability"
        exercises={currentWorkout.phases.stability.exercises}
        onExerciseClick={setSelectedExercise}
      />

      <PhaseCard
        title="Strength"
        exercises={strengthExercise ? [strengthExercise] : []}
        onExerciseClick={setSelectedExercise}
        isStrength
        strengthReps={strengthReps}
        onStrengthRepsChange={setStrengthReps}
      />

      <PhaseCard
        title="Finisher"
        exercises={currentWorkout.phases.finisher.exercises}
        onExerciseClick={setSelectedExercise}
      />

      <CompleteButton
        variant="contained"
        size="large"
        fullWidth
        disabled={!allRepsEntered}
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
}));
