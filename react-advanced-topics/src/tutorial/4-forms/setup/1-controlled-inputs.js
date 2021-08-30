import React, { useState } from "react";
// JS:
//   const input = document.getElementById('myText');
//   const inputValue = input.value
// React:
//   value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    function uuidv4() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
          var r = (Math.random() * 16) | 0,
            v = c === "x" ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        }
      );
    }

    if (firstName && lastName && email) {
      const person = {
        id: uuidv4(),
        firstName,
        lastName,
        email,
      };

      setPeople((people) => {
        return [...people, person];
      });
    } else {
      console.log("One of the values is empty!");
    }
  };

  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='formControl'>
            <label htmlFor='firstName'>First name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='formControl'>
            <label htmlFor='lastName'>Last name : </label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className='formControl'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type='submit'>Add person</button>
        </form>
        {people.map((person) => {
          const { id, firstName, lastName, email } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName + " " + lastName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
