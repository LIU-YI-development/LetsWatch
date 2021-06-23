import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Demonstration = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h4>Hello {user.name}</h4>
        <p>Enjoy videos</p>
      </div>
    )
  );
};

export default Demonstration;
