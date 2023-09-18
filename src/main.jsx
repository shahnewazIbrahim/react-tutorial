import React from 'react';
import ReactDOM from 'react-dom/client';

// const element = React.createElement("h1", {className='heading'}, "hello world");

  const element = (
    <h1 className='heading'>
      <span>
        Hello {new Date().toLocaleTimeString()}
      </span>
    </h1>
  );
  
// ReactDOM.render(element, document.getElementById('root'));
  
  ReactDOM.createRoot(document.getElementById('root')).render( 
  element
)
  
