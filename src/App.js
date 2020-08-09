import React, {Component} from 'react';
import UglyButton from "./UglyButton";
import PrettyButton from "./PrettyButton";

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
