"use client";

import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Exercise } from "@/types";

type ExerciseItemProps = {
  exercise: Exercise;
  onClick: () => void;
};

export const ExerciseItem = ({ exercise, onClick }: ExerciseItemProps) => {
  return (
    <ExerciseButton onClick={onClick}>
      <Typography variant="body1">{exercise.name}</Typography>
      {exercise.target && (
        <Typography variant="body2" color="text.secondary">
          {exercise.target}
        </Typography>
      )}
    </ExerciseButton>
  );
};

const ExerciseButton = styled("button")(({ theme }) => ({
  display: "block",
  width: "100%",
  padding: theme.spacing(1.5),
  marginBottom: theme.spacing(1),
  backgroundColor: theme.palette.grey[800],
  border: "none",
  borderRadius: theme.shape.borderRadius,
  textAlign: "left",
  cursor: "pointer",
  color: theme.palette.text.primary,
  "&:hover": {
    backgroundColor: theme.palette.grey[700],
  },
  "&:active": {
    backgroundColor: theme.palette.grey[600],
  },
}));
