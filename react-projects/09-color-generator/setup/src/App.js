import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [isValid, setIsValid] = useState(true);
  const [color, setColor] = useState("");
  const [list, setList] = useState(new Values("#ffa500").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      console.log(error);
      setIsValid(false);
    }
  };

  return (
    <>
      <section className='container'>
        <h3>Color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            className={isValid ? null : "error"}
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#ffa500'
          />
          <button className='btn' type='submit'>
            Submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
