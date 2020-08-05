import React, {Component} from 'react';
import {UglyButton, PrettyButton} from "./MyButton";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <UglyButton text="MUI button with HOC" />
                <PrettyButton text="Today" />
            </React.Fragment>
        );
    }
}

export default App;
