import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  
  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1
      })
    }, 2000);
  }

  const complexDecrease = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState - 1
      })
    }, 2000);
  }

  return <React.Fragment>
    <section style={{margin: '4rem 0'}}>
      <h2>delayed counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={complexIncrease}>
        increase
      </button>
      <button className='btn' onClick={complexDecrease}>
        decrease
      </button>
      <button className='btn' onClick={() => setValue(0)}>
        reset
      </button>
    </section>
  </React.Fragment>;
};

export default UseStateCounter;
