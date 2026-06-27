import { refs } from './refs';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import ErrIcon from '../img/error-icon.svg';
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
export function createGallery(images) {
  const markup = images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
                <a class="gallery-link" href="${largeImageURL}">
                  <img
                    class="gallery-image"
                    src="${webformatURL}"
                    data-source="${largeImageURL}"
                    alt="${tags}"
                  />

                </a>
                 <ul class="gallery-image-description">
                  <li class="gallery-image-description-item">
                    <p class="gallery-image-item-title">Likes</p>
                    <p class="gallery-image-item-value">${likes}</p>
                  </li>
                  <li class="gallery-image-description-item">
                    <p class="gallery-image-item-title">Views</p>
                    <p class="gallery-image-item-value">${views}</p>
                  </li>
                  <li class="gallery-image-description-item">
                    <p class="gallery-image-item-title">Comments</p>
                    <p class="gallery-image-item-value">${comments}</p>
                  </li>
                  <li class="gallery-image-description-item">
                    <p class="gallery-image-item-title">Downloads</p>
                    <p class="gallery-image-item-value">${downloads}</p>
                  </li>
                </ul>
              </li>`;
      }
    )
    .join('');
  refs.galleryList.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearImageList() {
  refs.galleryList.innerHTML = '';
}
export function allUpdateGallery(images) {
  clearImageList();
  createGallery(images);
}

export function showNotFound(message) {
  iziToast.error({
    message,
    messageColor: '#fafafb',
    color: '#EF4040',
    class: 'my-toast',
    iconUrl: ErrIcon,
    position: 'topRight',
    timeout: 3000,
  });
}
export function showLoader() {
  refs.loader.classList.remove('hidden');
}

export function hideLoader() {
  refs.loader.classList.add('hidden');
}
