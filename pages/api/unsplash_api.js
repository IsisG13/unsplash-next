import axios from 'axios';

const Unsplash_api = async () => {
  const ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
  const response = await axios.get(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`);
  return response.data;
}

export default Unsplash_api;