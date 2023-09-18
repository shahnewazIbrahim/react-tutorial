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
  print() {
    return (
      <h1 className='heading'>
        <span>
          Hello {new Date().toLocaleTimeString()}
        </span>
      </h1>
    );
  }
}
  
// ReactDOM.render(<Clock/>, document.getElementById('root'));

const clockComponent = new Clock();
  
ReactDOM
  .createRoot(document.getElementById('root'))
  .render(clockComponent.print())
  
