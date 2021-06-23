import React from 'react';

import ReactPlayer from 'react-player';
// import { useDispatch } from 'react-redux';

const Video = () => {
  // const dispatch = useDispatch();
  const Url = ['/videos/demo1.mp4', '/videos/demo2.mp4', '/videos/demo4.mp4'];
  return <ReactPlayer url={Url} width="100%" height="100%" controls={true} />;
};
export default Video;
