"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { QuitWorkoutModal } from "./QuitWorkoutModal";

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
          <Logo variant="h6" onClick={handleLogoClick}>
            💪 Grind
          </Logo>
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
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
  backgroundColor: theme.palette.background.default,
}));

const StyledToolbar = styled(Toolbar)({
  height: `${HEADER_HEIGHT} !important`,
  "@media (min-width: 600px)": {
    minHeight: HEADER_HEIGHT,
  },
});

const Logo = styled(Typography)({
  cursor: "pointer",
});

const Spacer = styled("div")(({ theme }) => ({
  height: HEADER_HEIGHT,
  marginBottom: theme.spacing(2),
}));
