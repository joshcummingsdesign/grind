"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

type QuitWorkoutModalProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export const QuitWorkoutModal = ({
  open,
  onClose,
  onConfirm,
}: QuitWorkoutModalProps) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs">
      <DialogTitle>Quit Workout?</DialogTitle>
      <DialogContent>
        <Typography>Any unsaved changes will be lost.</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="inherit">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="error">
          Quit
        </Button>
      </DialogActions>
    </Dialog>
  );
};
