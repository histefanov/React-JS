import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  const [isError , setIsError] = useState(false);

  return (
    <>
      <h3>short-circuit and ternary operator evaluations</h3>
      <button className='btn' style={{marginBottom: '2rem'}} onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      <div>       
        <h4>Short-circuit evaluation: {isError && 'Error!'}</h4>
        <h4>Ternary operator: {isError ? 'Error!' : 'No error.'}</h4>
      </div>
    </>
  )
};

export default ShortCircuit;
