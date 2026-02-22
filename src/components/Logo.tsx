"use client";

import { useTheme } from "@mui/material/styles";

type LogoProps = {
  size?: number;
};

export const Logo = ({ size = 24 }: LogoProps) => {
  const theme = useTheme();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 18L9 12L13 16L21 8"
        stroke={theme.palette.primary.main}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
