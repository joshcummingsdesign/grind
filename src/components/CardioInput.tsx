"use client";

import { TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

type CardioInputProps = {
  miles: number;
  onChange: (miles: number) => void;
};

export const CardioInput = ({ miles, onChange }: CardioInputProps) => {
  const handleChange = (value: string) => {
    onChange(parseFloat(value) || 0);
  };

  return (
    <InputContainer>
      <InputLabel variant="caption">Miles</InputLabel>
      <StyledTextField
        type="number"
        value={miles || ""}
        onChange={(e) => handleChange(e.target.value)}
        inputProps={{ min: 0, step: 0.1, inputMode: "decimal" }}
        size="small"
        placeholder="0"
      />
    </InputContainer>
  );
};

const InputContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: theme.spacing(1),
  width: "100%",
}));

const InputLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[300],
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  "& input": {
    textAlign: "center",
    fontSize: "1.25rem",
    padding: theme.spacing(1.5),
  },
}));
