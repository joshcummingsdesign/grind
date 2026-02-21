"use client";

import { Card, CardContent, Typography, Checkbox } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Exercise } from "@/types";
import { ExerciseItem } from "./ExerciseItem";
import { StrengthInputs } from "./StrengthInputs";

type PhaseCardProps = {
  title: string;
  exercises: Exercise[];
  onExerciseClick: (exercise: Exercise) => void;
  completed: boolean;
  onToggleComplete: () => void;
  isStrength?: boolean;
  strengthReps?: number[];
  onStrengthRepsChange?: (reps: number[]) => void;
};

export const PhaseCard = ({
  title,
  exercises,
  onExerciseClick,
  completed,
  onToggleComplete,
  isStrength = false,
  strengthReps = [0, 0, 0],
  onStrengthRepsChange,
}: PhaseCardProps) => {
  return (
    <StyledCard completed={completed}>
      <CardContent>
        <HeaderRow>
          <CheckboxWrapper>
            <Checkbox checked={completed} onChange={onToggleComplete} />
          </CheckboxWrapper>
          <Typography variant="h6">{title}</Typography>
        </HeaderRow>
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

const StyledCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== "completed",
})<{ completed?: boolean }>(({ theme, completed }) => ({
  marginBottom: theme.spacing(2),
  opacity: completed ? 0.5 : 1,
  backgroundColor: completed ? theme.palette.grey[100] : undefined,
  pointerEvents: completed ? "none" : undefined,
}));

const HeaderRow = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(1),
  marginLeft: theme.spacing(-1),
}));

const CheckboxWrapper = styled("div")({
  pointerEvents: "auto",
});
