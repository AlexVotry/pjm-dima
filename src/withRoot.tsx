import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: 'rgba(88, 88, 91, 0.7)',
            light: 'rgba(88, 88, 91, .5)',
            dark: 'rgba(88, 88, 91, 1)',
            contrastText: '#fff',
        },
        secondary: {
            light: '#e01e5a',
            main: '#3cf',
            dark: '#f39336',
            contrastText: '#fff',
        },
        background: {
            paper: 'rgba(0,0,0,.7)',
            default: 'rgba(88, 88, 91, 0.7)',
        },
        text: {
            primary: '#fff',
            secondary: 'rgba(255,255,255,.8)',
        },
        info: {
            light: '#e01e5a',
            main: '#3cf',
            dark: '#f39336',
            contrastText: '#fff',
        },
    },
    typography: {
        body1: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 400,
            fontSize: '.7rem',
            lineHeight: 1,
            letterSpacing: '0.00938em',
        },
    },
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
