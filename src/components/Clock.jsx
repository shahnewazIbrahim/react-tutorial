import React from 'react';

class Clock extends React.Component{
    // state define shorthand way //
    state = {
        date : new Date()
    };
    
    // state define constructor way //
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         date : new Date()
    //     };
    // }

    // after render the component 
    componentDidMount() {
        this.clockTimer =  setInterval(() => { this.tick() }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    tick() {
        this.setState({
            date: new Date() //this.sate.date = new Date() *** never do that because it is not changing your state reactively
        })

        /* another way */
        // this.setState((state, props) => {

        // })
    }

    render() {
        return (
            <h1 className='heading'>
                <span>
                Hello- {this.props.children} {this.state.date.toLocaleTimeString(this.props.locale)}
                </span>
            </h1>
        );
    }
}

export default Clock;
  