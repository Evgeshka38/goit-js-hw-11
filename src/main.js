import { getImagesByQuery } from './js/pixabay-api';
import { refs } from './js/refs';
import {
  clearImageList,
  createGallery,
  hideLoader,
  showLoader,
  showNotFound,
} from './js/render-functions';

refs.formSearch.addEventListener('submit', hendleSearchForm);

function hendleSearchForm(event) {
  event.preventDefault();
  const searchValue = event.target.elements.searchText.value.trim();

  if (searchValue === '') {
    console.log('Please enter search query', 'warning');
    return;
  }
  showLoader();
  getImagesByQuery(searchValue)
    .then(({ hits }) => {
      clearImageList();
      if (hits.length > 0) {
        createGallery(hits);
      } else {
        showNotFound();
      }
    })
    .catch(error => {
      console.log('error images get by search', error);
    })
    .finally(() => {
      hideLoader();
    });
  refs.formSearch.reset();
}
