import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  }

  return (
    <React.Fragment>
      <ul>
        {
          people.map((person) => {
            const { id, name } = person;
            return (
              <li key={id} className='item'>
                <h4>{name}</h4>
                <button className='btn' onClick={() => removeItem(id)}>remove name</button>
              </li>
            )
          })
        }
      </ul>
      <button className='btn' onClick={() => setPeople([])}>clear items</button>
    </React.Fragment>
  )
};

export default UseStateArray;
