import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import background from "../amazon.jpg";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Chip from "@mui/material/Chip";
import { Footer } from "./Footer";
import { Head } from "./Head";
import { SignInHeader } from "./SignInHeader";
import { SignInFooter } from "./SignInFooter";
import FaceIcon from "@mui/icons-material/Face";
import { Amplify, Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../aws-exports.js";
import UserPool from "../UserPool";
Amplify.configure(awsExports);

const theme = createTheme();
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  "@media all": {
    minHeight: 280,
    backgroundColor: "#2a293d",
  },
}));

const SignIn = ({ signOut, user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  UserPool.SignIn(email, password, [], null, (err, data) => {
    console.log(err);
  });
};

return (
  <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
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
    </Box>
    <Grid container component="main" sx={{ height: "40vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        style={{ backgroundColor: "white" }}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box component="form" sx={{ mt: 1 }}>
            <Button>
              Hello {user.username}
              <Chip
                icon={<FaceIcon />}
                label="Bella Anindo"
                variant="outlined"
                color="warning"
              />
            </Button>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button type="submit" onClick={signOut}>
              Signup
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </ThemeProvider>
);

export default withAuthenticator(SignIn, {
  components: {
    Head,
    SignIn: {
      Header: SignInHeader,
    },
  },
});
