import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


const galleryRef = document.querySelector(".gallery");
const galleryItem = createGalleryItemsMarkup (galleryItems);

function createGalleryItemsMarkup (items) {
   return galleryItems.map(item => `<a class="gallery__item" href="${item.original}"><img class="gallery__image" src="${item.preview}" alt-"${item.description}" width="340"/></a>`).join(" ");
}

// console.log(galleryItem);

galleryRef.innerHTML = galleryItem;


let gallery = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay:250});
