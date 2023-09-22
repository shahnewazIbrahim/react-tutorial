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

    handleClick = (locale) => {
        console.log(locale.value);
        this.setState({
            locale: locale
        })
        // this.setState((state, props) => ({
        //     locale: state.locale
        // }));
    }

    render() {
        const { date, locale } = this.state;
        
        return (
            <div>
                <h1 className='heading'>
                    <span>
                        {this.props.children} {date.toLocaleTimeString(locale)}
                    </span>
                </h1>
                
                {/* {
                    locale === 'bn-BD'
                        ?
                    <Button
                        change={this.handleClick.bind(this, 'en-US')}
                        locale='en-US'
                        show={false}
                    />
                            :
                    <Button
                        change={this.handleClick.bind(this, 'bn-BD')}
                        locale='bn-BD'
                        show={true}
                    />
                } */}
                
            </div>
            
        );
    }
}

export default Clock;
  