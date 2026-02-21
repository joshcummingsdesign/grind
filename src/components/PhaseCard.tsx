"use client";

import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Exercise } from "@/types";
import { ExerciseItem } from "./ExerciseItem";
import { StrengthInputs } from "./StrengthInputs";

type PhaseCardProps = {
  title: string;
  exercises: Exercise[];
  onExerciseClick: (exercise: Exercise) => void;
  isStrength?: boolean;
  strengthReps?: number[];
  onStrengthRepsChange?: (reps: number[]) => void;
};

export const PhaseCard = ({
  title,
  exercises,
  onExerciseClick,
  isStrength = false,
  strengthReps = [0, 0, 0],
  onStrengthRepsChange,
}: PhaseCardProps) => {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        {exercises.map((exercise, index) => (
          <div key={index}>
            <ExerciseItem
              exercise={exercise}
              onClick={() => onExerciseClick(exercise)}
            />
            {isStrength && onStrengthRepsChange && (
              <StrengthInputs
                reps={strengthReps}
                onChange={onStrengthRepsChange}
              />
            )}
          </div>
        ))}
      </CardContent>
    </StyledCard>
  );
};

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));
