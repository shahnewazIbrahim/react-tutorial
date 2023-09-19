import React from 'react';
import ReactDOM from 'react-dom/client';

// const element = React.createElement("h1", {className='heading'}, "hello world");

// component that return element 
// function Clock({locale}) {
//   return (
//     <h1 className='heading'>
//       <span>
//         Hello {new Date().toLocaleTimeString(locale)}
//       </span>
//     </h1>
//   );
// }

class Clock extends React.Component{
  render() {
    return (
      <h1 className='heading'>
        <span>
          Hello- {this.props.children} {new Date().toLocaleTimeString(this.props.locale)}
        </span>
      </h1>
    );
  }
}
  
// ReactDOM.render(<Clock/>, document.getElementById('root'));

// const clockComponent = new Clock();
  
ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <Clock locale="bn-BD">
      test
    </Clock>
  )
  
