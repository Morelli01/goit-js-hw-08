// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const options = {
  captionsData: 'alt',
  captionDelay: 250,
};

const ulEl = document.querySelector('.gallery');

const galleryEl = createGallery(galleryItems);
ulEl.insertAdjacentHTML('beforeend', galleryEl);

function createGallery(items) {
  return items
    .map(({ original, preview, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
        </li>
      `;
    })
    .join('');
}

new SimpleLightbox('.gallery a', options);

console.log(galleryItems);