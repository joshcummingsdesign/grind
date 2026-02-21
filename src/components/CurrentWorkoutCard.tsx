"use client";

import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Workout } from "@/types";

type CurrentWorkoutCardProps = {
  workout: Workout;
};

export const CurrentWorkoutCard = ({ workout }: CurrentWorkoutCardProps) => {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="overline" color="text.secondary">
          Next Workout
        </Typography>
        <Typography variant="h5" gutterBottom>
          {workout.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {workout.description}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));
