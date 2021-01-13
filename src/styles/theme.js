import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#BA2329",
    },
    secondary: {
      main: "#007DDB",
    },
  },
  typography: {
    fontFamily: "Helvetica Neue",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": "Helvetica Neue",
      },
    },
  },
});

export default theme;
