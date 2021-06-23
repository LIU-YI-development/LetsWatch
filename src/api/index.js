import axios from 'axios';

const url = 'videos/';

export const fetchVideos = () => axios.get(url);
