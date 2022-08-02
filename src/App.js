import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Security from "./Security";
import Home from "./Home";
// import Test from "./API/Test";
import Application from "./Application";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import React from "react";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import "@aws-amplify/ui-react/styles.css";

const AppWrapper = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    { path: "/Security", element: <Security /> },
    { path: "/Application", element: <Application /> },
    // { path: "/Test", element: <Test /> },
  ]);
  return routes;
};

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 4,
      }}
    >
      {theme.palette.mode} mode
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
}

const App = () => {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppWrapper />
        <ColorModeContext.Provider value={colorMode}>
          <MyApp />
        </ColorModeContext.Provider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
