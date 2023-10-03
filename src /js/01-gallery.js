import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryList = document.querySelector(".gallery");
const picturesMarcup = createGalleryItems(galleryItems);

galleryList.insertAdjacentHTML("beforeend", picturesMarcup);

function createGalleryItems(galleryItems) {
  return galleryItems.map(({ preview, original, description }) =>
  ` <li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
   </li> `
    )
    .join("");
    
}
createGalleryItems(galleryItems);
new SimpleLightbox('.gallery a', {
   captionsData: 'alt',
   captionPosition: 'bottom',
   captionDelay: 250,
 });
 
console.log(galleryItems);
