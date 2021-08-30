import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [isVisible, setIsVisible] = useState(false);

  return <>
    <button className='btn' onClick={() => setIsVisible(!isVisible)}>
      show/hide
    </button>
    {isVisible && <Item />}
  </>;
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize)
    }
  }, [])

  return <div style={{marginTop: '2rem'}}>
    Width: {size} PX
  </div>
}

export default ShowHide;
