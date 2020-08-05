import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

const uglyStyles = theme => ({
    button: {
        backgroundColor: "blue",
        margin: "30px",
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
    rippleVisible: {
        animation: `$enter 550ms ${theme.transitions.easing.easeInOut}`,
    },
    "@keyframes enter": {
        "0%": {
            transform: "scale(0)",
            opacity: 0.0,
        },
        "100%": {
            transform: "scale(1)",
            opacity: 0.5,
        }
    }
});

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
        backgroundColor: "#000000",
    },
    rippleVisible: {
        animation: `$enter 550ms ${theme.transitions.easing.easeInOut}`,
    },
    "@keyframes enter": {
        "0%": {
            transform: "scale(0)",
            opacity: 0.0,
        },
        "100%": {
            transform: "scale(1)",
            opacity: 0.15,
        }
    }
});

class MyButton extends Component {
    render() {
        const { button, ...rippleClasses } = this.props.classes;
        const { text } = this.props;

        return (
                <Button
                    TouchRippleProps={{classes: rippleClasses}}
                    className={button}>
                    {text}
                </Button>
        );
    }
}

Button.propTypes = {
    classes: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,

};

const UglyButton = withStyles(uglyStyles)(MyButton);
const PrettyButton = withStyles(prettyStyles)(MyButton);

// I take MUI Button component and wrap it into my React component, "MyButton".
// Then I wrap "MyButton" component with MUI styles wrapper (`withStyles()()`) that takes my styles and overwrites the
// MUI library .
export {
    UglyButton, PrettyButton
}