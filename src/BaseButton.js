import React, {Component} from 'react';
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

class BaseButton extends Component {
    render() {
        const {button, ...rippleClasses} = this.props.classes;
        const {text} = this.props;

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

export default BaseButton;