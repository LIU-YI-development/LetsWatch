import React, { useState, useEffect } from 'react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import './App.css';
import Demonstration from './components/Demonstration';

import { getVideos } from './actions/videos';
import { useAuth0 } from '@auth0/auth0-react';

import { useDispatch } from 'react-redux';
import Videos from './components/Videos/Videos';

function App() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideos());
  }, [currentId, dispatch]);
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <LoginButton />
      <LogoutButton />
      <Demonstration />
      <Videos setCurrentId={setCurrentId} />
    </>
  );
}

export default App;
