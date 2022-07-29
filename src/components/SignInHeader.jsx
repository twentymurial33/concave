import React from "react";
import { Heading, useTheme } from "@aws-amplify/ui-react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  "@media all": {
    minHeight: 200,
    backgroundColor: "#2a293d",
  },
}));

export function SignInHeader() {
  const { tokens } = useTheme();

  return (
    <>
      <AppBar position="static">
        <StyledToolbar>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, alignSelf: "flex-end" }}
          >
            Amazon Everest Dashboards
          </Typography>
        </StyledToolbar>
      </AppBar>
      <Heading level={3} padding={`${tokens.space.xl} ${tokens.space.xl} 0`}>
        Sign in to your Account
      </Heading>
    </>
  );
}
