import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';
import Video from './Video/Video';

const Videos = ({ setCurrentId }) => {
  const videos = useSelector((state) => state.videos);
  const { isAuthenticated } = useAuth0();
  console.log(videos);
  return (
    isAuthenticated &&
    (!videos.length ? (
      <CircularProgress />
    ) : (
      <Grid container alignItems="stretch" spacing={3}>
        {videos.map((video) => (
          <Grid key={video._id} item xs={12} sm={6} md={6}>
            <Video video={video} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    ))
  );
};

export default Videos;
