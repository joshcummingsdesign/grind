"use client";

import { Dialog, DialogTitle, DialogContent, Typography, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
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
      <StyledDialogTitle>
        {exercise.name}
        <CloseButton onClick={onClose}>
          <Close />
        </CloseButton>
      </StyledDialogTitle>
      <DialogContent>
        <Typography>{exercise.description}</Typography>
        {exercise.target && (
          <Typography variant="body2" color="text.secondary" marginTop={2}>
            Target: {exercise.target}
          </Typography>
        )}
        {exercise.sets && exercise.sets > 1 && (
          <Typography variant="body2" color="text.secondary" marginTop={2}>
            Sets: {exercise.sets}
          </Typography>
        )}
      </DialogContent>
    </Dialog>
  );
};

const StyledDialogTitle = styled(DialogTitle)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const CloseButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));
