"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { QuitWorkoutModal } from "./QuitWorkoutModal";
import { Logo } from "./Logo";

const HEADER_HEIGHT = 54;

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [showQuitModal, setShowQuitModal] = useState(false);

  const handleLogoClick = () => {
    if (pathname === "/workout") {
      setShowQuitModal(true);
    } else {
      router.push("/");
    }
  };

  const handleConfirmQuit = () => {
    setShowQuitModal(false);
    router.push("/");
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
      <QuitWorkoutModal
        open={showQuitModal}
        onClose={() => setShowQuitModal(false)}
        onConfirm={handleConfirmQuit}
      />
    </>
  );
};

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.grey[800]}`,
  backgroundColor: theme.palette.background.default,
}));

const StyledToolbar = styled(Toolbar)({
  height: `${HEADER_HEIGHT} !important`,
  "@media (min-width: 600px)": {
    minHeight: HEADER_HEIGHT,
  },
});

const LogoWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: 8,
  cursor: "pointer",
});

const LogoText = styled(Typography)({
  fontWeight: 800,
});

const Spacer = styled("div")(({ theme }) => ({
  height: HEADER_HEIGHT,
  marginBottom: theme.spacing(2),
}));
