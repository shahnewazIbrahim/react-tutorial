import React from "react";

class Button extends React.Component {
    render() { 
        console.log("button component rendered");
        const { change } = this.props;

        return (
            <button type="button" onClick={change}>
                Click here
            </button>
        )
    }
}

export default Button;