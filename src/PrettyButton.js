import {withStyles} from "@material-ui/core";
import BaseButton from "./BaseButton";

const rippleOpacityOnClick = 0.3;

const prettyStyles = theme => ({
    button: {
        backgroundColor: "white",
        border: "1px solid #DADBDF",
        margin: "0 0 0 10px",
        height: 37,
        padding: "0 10px",
        boxShadow: "none",
        color: "black",
        textTransform: 'none',
        fontFamily: "Nunito Sans",
        fontWeight: 600,
        fontSize: 15,
        "&:hover": {
            backgroundColor: "#F1F3F4",
        },
    },
    child: {
        backgroundColor: "#757575",
    },
    rippleVisible: {
        opacity: rippleOpacityOnClick,
        animation: `$enter 900ms ${theme.transitions.easing.easeInOut}`,
    },
    '@keyframes enter': {
        '0%': {
            transform: 'scale(0)',
            opacity: 0.1,
        },
        '100%': {
            transform: 'scale(4)',
            opacity: rippleOpacityOnClick,
        },
    },
});

const PrettyButton = withStyles(prettyStyles)(BaseButton);

// I take MUI Button component and wrap it into my React component, "BaseButton".
// Then I wrap "BaseButton" component with MUI styles wrapper (`withStyles()()`) that takes my styles and overwrites the
// MUI library .

export default PrettyButton;