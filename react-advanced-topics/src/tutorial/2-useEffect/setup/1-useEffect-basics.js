import React, { useState, useEffect } from 'react';

const UseEffectBasics = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('use effect!')
    document.title = count > 0 ? `Clicks(${count})` : 'No clicks yet.';
  }, [count])

  return <React.Fragment>
    <h2>You clicked {count} times!</h2>
    <button className='btn' onClick={() => setCount(count + 1)}>click me</button>
  </React.Fragment>;
};

export default UseEffectBasics;
