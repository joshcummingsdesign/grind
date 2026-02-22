"use client";

import { AppBar, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigationGuard } from "@/hooks/useNavigationGuard";
import { Logo } from "./Logo";

const HEADER_HEIGHT = 48;

export const Header = () => {
  const { navigate } = useNavigationGuard();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <>
      <StyledAppBar position="fixed" color="transparent" elevation={0}>
        <StyledToolbar>
          <LogoWrapper onClick={handleLogoClick}>
            <Logo size={24} />
            <LogoText variant="h6">Grind</LogoText>
          </LogoWrapper>
        </StyledToolbar>
      </StyledAppBar>
      <Spacer />
    </>
  );
};

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  border: "none !important",
  borderBottom: `1px solid ${theme.palette.grey[800]} !important`,
  backgroundColor: theme.palette.background.default,
}));

const StyledToolbar = styled("header")(({ theme }) => ({
  display: "flex",
  padding: `0 ${theme.spacing(1)}`,
  height: HEADER_HEIGHT,
  width: "100%",
  maxWidth: theme.breakpoints.values.xl,
  margin: "0 auto",
}));

const LogoWrapper = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 8,
  padding: `0 ${theme.spacing(1)}`,
  minWidth: "auto",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

const LogoText = styled(Typography)({
  fontWeight: 800,
});

const Spacer = styled("div")(({ theme }) => ({
  height: HEADER_HEIGHT,
  marginBottom: theme.spacing(2),
}));
