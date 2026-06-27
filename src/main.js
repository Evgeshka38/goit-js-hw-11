import { getImagesByQuery } from './js/pixabay-api';
import { refs } from './js/refs';
import {
  allUpdateGallery,
  clearImageList,
  hideLoader,
  showLoader,
  showNotFound,
} from './js/render-functions';

refs.formSearch.addEventListener('submit', hendleSearchForm);

function hendleSearchForm(event) {
  event.preventDefault();
  const searchValue = event.target.elements.searchText.value.trim();

  if (searchValue === '') {
    showNotFound('Please enter search query');
    return;
  }
  showLoader();
  clearImageList();
  getImagesByQuery(searchValue)
    .then(({ hits }) => {
      if (hits.length > 0) {
        allUpdateGallery(hits);
      } else {
        showNotFound(
          'Sorry, there are no images matching <br> your search query. Please try again!'
        );
      }
    })
    .catch(() => {
      showNotFound('Error images get by search');
    })
    .finally(() => {
      hideLoader();
    });
  refs.formSearch.reset();
}
