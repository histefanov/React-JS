import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const UpdateSize = () => {
    setSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', UpdateSize)
    return () => {
      window.removeEventListener('resize', UpdateSize);
    }
  })

  return (
    <>
      <h1>Window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
