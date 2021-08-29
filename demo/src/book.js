import React from 'react'

const Book = ({ img, title, author }) => {
  const buttonClickHandler = () => alert('Good choice!');
  return (
  <article className='book'>
    <img onClick={() => console.log(title)} className='cover' src={img} alt='' />
    <h1 className='title'>{title}</h1>
    <h4 className='author'>by {author}</h4>
    <button type='button' onClick={buttonClickHandler}>Read</button>
  </article>
  );
}

export default Book
