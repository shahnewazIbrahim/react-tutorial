import React from "react";

export default class Form extends React.Component {
    state = {
        title : "Javascript"
    }
    
    handleChange = (e) => {
        // console.log(e.target.value);
        this.setState({
            title: e.target.value
        });
    }

    render() {
        const { title } = this.state;
        return (
          <div>
            <form action="">
                <input type="text" placeholder="Enter Title" value={title} onChange={this.handleChange} />
                </form>
                 {title}
          </div>  
        )
    }
}