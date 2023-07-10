import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(`.gallery`);
console.log(galleryItems);

const galleryListArr = galleryItems.map((image) => {
  return `<li class="gallery__item">
   <a class="gallery__link" href="${image.original}">
      <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
   </a>
</li>`;
});

const listTemplate = `${galleryListArr.join(``)}`;

galleryEl.insertAdjacentHTML(`beforeend`, listTemplate);

galleryEl.addEventListener(`click`, openOriginal);

function openOriginal(event) {
  event.preventDefault();
}
