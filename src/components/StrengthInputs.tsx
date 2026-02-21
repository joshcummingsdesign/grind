"use client";

import { TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

type StrengthInputsProps = {
  reps: number[];
  onChange: (reps: number[]) => void;
};

export const StrengthInputs = ({ reps, onChange }: StrengthInputsProps) => {
  const handleChange = (index: number, value: string) => {
    const newReps = [...reps];
    newReps[index] = parseInt(value) || 0;
    onChange(newReps);
  };

  return (
    <InputsContainer>
      {[0, 1, 2].map((index) => (
        <SetInput key={index}>
          <Typography variant="caption" color="text.secondary">
            Set {index + 1}
          </Typography>
          <StyledTextField
            type="number"
            value={reps[index] || ""}
            onChange={(e) => handleChange(index, e.target.value)}
            inputProps={{ min: 0, inputMode: "numeric" }}
            size="small"
            placeholder="0"
          />
        </SetInput>
      ))}
    </InputsContainer>
  );
};

const InputsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  marginTop: theme.spacing(1),
}));

const SetInput = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flex: 1,
});

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& input": {
    textAlign: "center",
    fontSize: "1.25rem",
    padding: theme.spacing(1.5),
  },
}));
