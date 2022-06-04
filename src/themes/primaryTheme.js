import { createTheme } from "@mui/material/styles";

export const themeOptions = {
    palette: {
        type: 'dark',
        primary: {
            main: '#9e1550',
        },
        secondary: {
            main: '#f50057',
        },
        warning: {
            main: '#ff9800',
        },
    },
};

const theme=createTheme(themeOptions);
export default theme