import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: green[500],
        },
    },
    spacing: 4,
    components:{
        MuiButton: {
            defaultProps:{
                variant: 'contained'
            },
        }
    },
    typography: {
        fontFamily: 'Times new roman',
        h1: {
            fontSize: '100px!important',
        },
        h2: {
            fontSize: 80,
        },
        h3: {
            fontSize: 60,
        },
        h4: {
            fontSize: 40,
        },
    }
});

export default theme