import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        }
        else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        setUser(user);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  })

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (isError) {
    return <h1>Error!</h1>
  }

  return (
    <div>
      <img src={user.avatar_url} alt={user.login} style={{borderRadius: '50%'}}/>
      <h3>{user.login}</h3>
    </div>    
  )
};

export default MultipleReturns;
