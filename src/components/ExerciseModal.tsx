"use client";

import { Dialog, DialogTitle, DialogContent, Typography } from "@mui/material";
import { Exercise } from "@/types";

type ExerciseModalProps = {
  exercise: Exercise | null;
  open: boolean;
  onClose: () => void;
};

export const ExerciseModal = ({
  exercise,
  open,
  onClose,
}: ExerciseModalProps) => {
  if (!exercise) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{exercise.name}</DialogTitle>
      <DialogContent>
        <Typography>{exercise.description}</Typography>
        {exercise.target && (
          <Typography variant="body2" color="text.secondary" marginTop={2}>
            Target: {exercise.target}
          </Typography>
        )}
        {exercise.sets && exercise.sets > 1 && (
          <Typography variant="body2" color="text.secondary">
            Sets: {exercise.sets}
          </Typography>
        )}
      </DialogContent>
    </Dialog>
  );
};
