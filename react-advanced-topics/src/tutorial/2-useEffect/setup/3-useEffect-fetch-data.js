import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const GetUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
  } 

  useEffect(() => {
    GetUsers();
  }, [])

  return (
    <>
      <h2>github users</h2>
      <ul className='users'>
        {users.map((user) => {
          const {id, login, avatar_url, html_url} = user;
          return <li key={id}>
            <img src={avatar_url} alt={`${login}'s avatar`} />
            <div>
              <h4>{login}</h4>
              <a href={html_url}>profile</a>
            </div>
          </li>
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
