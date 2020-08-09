import {withStyles} from "@material-ui/core";
import BaseButton from "./BaseButton";

const uglyStyles = ({
    button: {
        backgroundColor: "blue",
        margin: "50px",
        height: 48,
        padding: "0 30px",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
        textTransform: 'none',
        fontWeight: 'bold',
        "&:hover": {
            backgroundColor: "red",
        },
    },
    child: {
        backgroundColor: "rgba(139,0,0)",
    },
});


const UglyButton = withStyles(uglyStyles)(BaseButton);

// I take MUI Button component and wrap it into my React component, "BaseButton".
// Then I wrap "BaseButton" component with MUI styles wrapper (`withStyles()()`) that takes my styles and overwrites the
// MUI library .
export default UglyButton;