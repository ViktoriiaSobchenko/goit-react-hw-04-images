import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '33689374-5e252b18d226d63d09d1d18ce';

async function getImages(searchQuery, page) {
  const responce = await axios.get(
    `${BASE_URL}/?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`
  );
  return responce.data;
}
export default getImages;
