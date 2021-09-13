import React, { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(null);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let amount = parseInt(count);

    if (count < 0) {
      amount = 1;
    }

    if (count > data.length) {
      amount = data.length;
    }

    setText(data.slice(0, amount));
  };

  return (
    <main>
      <section className='section-center'>
        <h3>Tired of boring lorem ipsum?</h3>
        <form className='lorem-form' onSubmit={handleSubmit}>
          <label htmlFor='count'>Paragraphs:</label>
          <input
            id='count'
            type='number'
            name='count'
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button type='submit' className='btn'>
            Generate
          </button>
        </form>
        <article className='lorem-text'>
          {text.map((par, index) => {
            return <p key={index}>{par}</p>;
          })}
        </article>
      </section>
    </main>
  );
}

export default App;
