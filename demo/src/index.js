import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/41tyokViuNL._AC_SX184_.jpg',
    title: 'The Very Hungry Caterpillar',
    author: 'Bill Martin Jr.'
  },
  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/41x7bwd0kDS._AC_SX184_.jpg',
    title: 'A Letter From Your Teacher: On the First Day of School',
    author: 'Eric Carle'
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51430n+9jlL._AC_SX184_.jpg',
    title: 'Brown Bear, Brown Bear, What Do You See?',
    author: 'Shannon Olsen'
  }
];

function Booklist() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book} />
      })}
    </section>
  );
}

const Book = ({img, title, author}) => {
  return (
  <article className='book'>
    <img className='cover' src={img} alt='' />
    <h1 className='title'>{title}</h1>
    <h4 className='author'>by {author}</h4>
  </article>
  );
}

ReactDom.render(
  <Booklist />,
  document.getElementById('root')
);