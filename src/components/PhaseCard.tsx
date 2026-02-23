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
import { CardioInput } from "./CardioInput";

type PhaseCardProps = {
  title: string;
  exercises: Exercise[];
  onExerciseClick: (exercise: Exercise) => void;
  completed: boolean;
  onToggleComplete: () => void;
  isStrength?: boolean;
  strengthReps?: number[];
  onStrengthRepsChange?: (reps: number[]) => void;
  isCardio?: boolean;
  cardioMiles?: number;
  onCardioMilesChange?: (miles: number) => void;
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
  isCardio = false,
  cardioMiles = 0,
  onCardioMilesChange,
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
          <ContentWrapper completed={completed}>
            <Typography variant="h6">{title}</Typography>
          </ContentWrapper>
          {maxLevel > 1 && onLevelChange && (
            <LevelSelector completed={completed}>
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
        <ContentWrapper completed={completed}>
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
              {isCardio && onCardioMilesChange && (
                <CardioInput
                  miles={cardioMiles}
                  onChange={onCardioMilesChange}
                />
              )}
            </div>
          ))}
        </ContentWrapper>
      </CardContent>
    </StyledCard>
  );
};

const StyledCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== "completed",
})<{ completed?: boolean }>(({ theme, completed }) => ({
  marginBottom: theme.spacing(2),
  backgroundColor: completed
    ? theme.palette.grey[900]
    : theme.palette.background.paper,
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

const ContentWrapper = styled("div", {
  shouldForwardProp: (prop) => prop !== "completed",
})<{ completed?: boolean }>(({ completed }) => ({
  opacity: completed ? 0.5 : 1,
  pointerEvents: completed ? "none" : undefined,
}));

const LevelSelector = styled("div", {
  shouldForwardProp: (prop) => prop !== "completed",
})<{ completed?: boolean }>(({ completed }) => ({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  pointerEvents: "auto",
  opacity: completed ? 0.5 : 1,
}));
