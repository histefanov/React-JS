import React, { useState } from 'react';

const UseStateBasics = () => {
  const [title, setTitle] = useState('random title');
  
  const handleClick = () => {
    if (title === 'random title') {
      setTitle('new title');
    } else {
      setTitle('random title');
    }
  }

  return <React.Fragment>
    <h1>{title}</h1>
    <button className='btn' onClick={handleClick}>change title</button>
  </React.Fragment>;
};

export default UseStateBasics;
