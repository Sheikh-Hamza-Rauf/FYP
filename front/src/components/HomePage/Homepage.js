import React from 'react';

const Home = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      {user ? (
        <h1>Welcome, {user.firstName} {user.lastName}</h1>
      ) : (
        <h1>Welcome to Voyaige</h1>
      )}
    </div>
  );
};

export default Home;
