import {createTheme} from '@mui/material/styles';
// import {orange} from '@mui/material/colors';

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
        };
    }

    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}

export const kevin = {
    colors: {
        primary: {
            emerald: "#014751",
            firefly: "#0F2830"
        },
        secondary: {
            zircon: "#F8FbFF",
            green: "#00D37F",
            mint: "#AFF8C8",
            bananaYellow: "#FFEEB4",
            lilac: "#D2C4FB",
        },
        status : {
            red: "#E23B3B",
            green: "#37CC73",
            yellow: "#F7B737",
        }
    }
}

const theme = createTheme({
    direction: 'ltr',
    palette: {
        mode: 'light',
        common: {
            black: '#000',
            white: '#FFF',
        },
        primary: {
            // light: will be calculated from palette.primary.main,
            main: kevin.colors.primary.emerald,
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            main: kevin.colors.secondary.zircon,
            contrastText: kevin.colors.primary.emerald,
        },
        error: {
            main: kevin.colors.status.red,
        },
        warning: {
            main: kevin.colors.status.yellow,
        },
        info: {
            main: kevin.colors.primary.emerald,
            contrastText: kevin.colors.secondary.zircon,
        },
        success: {
            main: kevin.colors.status.green,
        },
        contrastThreshold: 3,
        tonalOffset: 0.1,
        background: {
            default: kevin.colors.secondary.zircon,
            paper: kevin.colors.secondary.zircon,
        },
    },
    shape: {
        borderRadius: 15,
    },
    typography: {
        fontFamily: 'Cabin, sans-serif',
        h6: {
            fontFamily: 'Open sans, sans-serif',
        },
        button: {
            // fontFamily: 'Open sans, sans-serif',
            fontFamily: 'Cabin, sans-serif',
        }
    },
});

export default theme;