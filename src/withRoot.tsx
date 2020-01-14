import blue from "@material-ui/core/colors/blue";
import pink from "@material-ui/core/colors/pink";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import React from "react";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgba(88, 88, 91, 0.7)',
      light: 'rgba(88, 88, 91, .5)',
      dark: 'rgba(88, 88, 91, 1)',
      contrastText: '#fff'
    },
    secondary: pink,
    background: {
      paper: 'rgba(0,0,0,.7)',
      default: 'rgba(88, 88, 91, 0.7)',
    },
    text: {
      primary: "#fff"
    }
  }
});

function withRoot<P>(Component: React.ComponentType<P>) {
  function WithRoot(props: P) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;