import React from 'react';
import Button from './Button.jsx';

class Clock extends React.Component{
    /*state define shorthand way */ 
    state = {
        date: new Date(),
        locale: 'bn-BD'
    };
    
    /* state define constructor way */
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

    handleClick= (locale) =>{
        this.setState({
            locale: locale
        })
    }

    render() {
        console.log("clock component rendered");
        const { date, locale } = this.state;
        return (
            <div>
                <h1 className='heading'>
                    <span>
                    Hello- {this.props.children} {date.toLocaleTimeString(locale)}
                    </span>
                </h1>
                
                <Button change={this.handleClick.bind(this, 'en-US')}
                >
                    Click
                </Button>
            </div>
            
        );
    }
}

export default Clock;
  