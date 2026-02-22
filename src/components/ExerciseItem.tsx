"use client";

import { Typography } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { Exercise } from "@/types";

type ExerciseItemProps = {
  exercise: Exercise;
  onClick: () => void;
};

export const ExerciseItem = ({ exercise, onClick }: ExerciseItemProps) => {
  return (
    <ExerciseCard onClick={onClick}>
      <Content>
        <ExerciseName variant="body1">{exercise.name}</ExerciseName>
        {(exercise.target || exercise.sets) && (
          <MetaRow>
            {exercise.target && <Badge>{exercise.target}</Badge>}
            {exercise.sets && exercise.sets > 1 && (
              <Badge>{exercise.sets} sets</Badge>
            )}
          </MetaRow>
        )}
      </Content>
      <ChevronRight sx={{ color: "text.secondary" }} />
    </ExerciseCard>
  );
};

const ExerciseCard = styled("button")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  padding: theme.spacing(2),
  marginBottom: theme.spacing(1),
  backgroundColor: theme.palette.background.surface,
  border: `1px solid ${theme.palette.grey[700]}`,
  borderRadius: theme.shape.borderRadius,
  textAlign: "left",
  cursor: "pointer",
  color: theme.palette.text.primary,
  transition: "border-color 0.2s, background-color 0.2s",
  "&:hover": {
    backgroundColor: theme.palette.grey[800],
    borderColor: theme.palette.grey[600],
    "& span": {
      backgroundColor: theme.palette.grey[700],
    },
  },
  "&:active": {
    backgroundColor: theme.palette.grey[600],
  },
}));

const Content = styled("div")({
  flex: 1,
});

const ExerciseName = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  color: theme.palette.grey[300],
}));

const MetaRow = styled("div")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  marginTop: theme.spacing(0.5),
}));

const Badge = styled("span")(({ theme }) => ({
  fontSize: "0.75rem",
  padding: theme.spacing(0.25, 1),
  backgroundColor: theme.palette.grey[800],
  borderRadius: 4,
  color: theme.palette.grey[400],
  transition: "background-color 0.2s",
}));
