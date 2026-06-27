import axios from 'axios';
import { API_BASE_Url } from './constants';
axios.defaults.baseURL = API_BASE_Url;
export function getImagesByQuery(query) {
  return axios
    .get('', {
      params: {
        key: '56469569-b64a9d05da2a53595ebe37b4e',
        q: query,
        image_type: 'photo',
        per_page: 9,
      },
    })
    .then(({ data }) => {
      return data;
    });
}
