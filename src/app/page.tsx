"use client";

import { useEffect } from "react";
import { Typography, Button, CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";
import { StreakGraph } from "@/components/StreakGraph";
import { CurrentWorkoutCard } from "@/components/CurrentWorkoutCard";
import { useProgress } from "@/hooks/useProgress";
import { workouts } from "@/data/workouts";

export default function Home() {
  const router = useRouter();
  const { progress, isLoaded } = useProgress();

  useEffect(() => {
    if (sessionStorage.getItem("workoutJustCompleted")) {
      sessionStorage.removeItem("workoutJustCompleted");
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, []);

  if (!isLoaded) {
    return (
      <LoadingContainer>
        <CircularProgress />
      </LoadingContainer>
    );
  }

  const currentWorkout = workouts[progress.currentWorkoutIndex];

  return (
    <PageContainer>
      <Typography variant="h4" gutterBottom>
        Workout Tracker
      </Typography>

      <StreakGraph completedDates={progress.completedDates} />

      <CurrentWorkoutCard workout={currentWorkout} />

      <StartButton
        variant="contained"
        size="large"
        fullWidth
        onClick={() => router.push("/workout")}
      >
        Start Workout
      </StartButton>
    </PageContainer>
  );
}

const PageContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
  maxWidth: 600,
  margin: "0 auto",
}));

const LoadingContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
});

const StartButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: 50,
  fontSize: "1.1rem",
}));
