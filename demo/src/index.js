import React from 'react';
import ReactDom from 'react-dom';

function Booklist() {
  return (
    <section className='booklist'>
      <Book />
    </section>
  );
}

const images = [
  'https://images-na.ssl-images-amazon.com/images/I/41tyokViuNL._AC_SX184_.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/41x7bwd0kDS._AC_SX184_.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/51430n+9jlL._AC_SX184_.jpg'
];

const titles = [
  'The Very Hungry Caterpillar',
  'A Letter From Your Teacher: On the First Day of School',
  'Brown Bear, Brown Bear, What Do You See?'
];

const authors = [
  'Eric Carle',
  'Shannon Olsen',
  'Bill Martin Jr.'
];

const Book = () => {
  return (
  <article>
    <img className='cover' src="https://images-na.ssl-images-amazon.com/images/I/41tyokViuNL._AC_SX184_.jpg" alt="The Very Hungry Caterpillar" />
    <h1 className='title'>The Very Hungry Caterpillar</h1>
    <h4 className='author'>by Eric Carle</h4>
  </article>
  );
}

ReactDom.render(
  <Booklist />,
  document.getElementById('root')
);