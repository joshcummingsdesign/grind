"use client";

import {
  Card,
  CardContent,
  Typography,
  Checkbox,
  IconButton,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
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
  currentLevel?: number;
  maxLevel?: number;
  onLevelChange?: (level: number) => void;
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
  currentLevel = 1,
  maxLevel = 1,
  onLevelChange,
}: PhaseCardProps) => {
  return (
    <StyledCard completed={completed}>
      <CardContent>
        <HeaderRow>
          <CheckboxWrapper>
            <Checkbox checked={completed} onChange={onToggleComplete} />
          </CheckboxWrapper>
          <Typography variant="h6">{title}</Typography>
          {maxLevel > 1 && onLevelChange && (
            <LevelSelector>
              <IconButton
                size="small"
                onClick={() => onLevelChange(currentLevel - 1)}
                disabled={currentLevel <= 1}
              >
                <ChevronLeft />
              </IconButton>
              <Typography variant="body2">Level {currentLevel}</Typography>
              <IconButton
                size="small"
                onClick={() => onLevelChange(currentLevel + 1)}
                disabled={currentLevel >= maxLevel}
              >
                <ChevronRight />
              </IconButton>
            </LevelSelector>
          )}
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

const LevelSelector = styled("div")({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  pointerEvents: "auto",
});
