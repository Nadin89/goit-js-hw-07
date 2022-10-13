import { galleryItems } from "./gallery-items.js";

// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
const galleryItem = createGalleryItemsMarkup(galleryItems);

function createGalleryItemsMarkup(items) {
  return galleryItems
    .map(
      (item) =>
        `<div><a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt-"${item.description}" width="340"/></a></div>`
    )
    .join(" ");
}


galleryRef.innerHTML = galleryItem;

galleryRef.addEventListener("click", onImgClick);


function onImgClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
 createModalWindow(event.target.dataset.source);
}


let instance;

function createModalWindow(url) {
  instance = basicLightbox.create(`<img src="${url}">`);
  
  instance.show();

  
  document.addEventListener('keydown', onEscСlick);  
  
  closeByClick();
}

function onEscСlick(event) {
     
        if (event.code === 'Escape') {
            instance.close();   
        } 
        document.removeEventListener('keydown', onEscСlick);
}   
    
function closeByClick() {
    const basicLightboxRef = document.querySelector('.basicLightbox');
    basicLightboxRef.addEventListener('click', onEscСlick);
}

// console.log(galleryItems);





