import React, { useState } from 'react';
// JS:
//   const input = document.getElementById('myText');
//   const inputValue = input.value
// React:
//   value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email);
  }

  return <>
    <article>
      <form className='form' onSubmit={handleSubmit}>
        <div className='formControl'>
          <label htmlFor='firstName'>First name : </label>
          <input 
            type='text' 
            id='firstName' 
            name='firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}/>
        </div>
        <div className='formControl'>
          <label htmlFor='lastName'>Last name : </label>
          <input 
            type='text'
            id='lastName'
            name='lastName'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}/>
        </div>
        <div className='formControl'>
          <label htmlFor='email'>Email : </label>
          <input 
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <button type='submit'>Add person</button>
      </form>
    </article>
  </>;
};

export default ControlledInputs;
