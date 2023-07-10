import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(`.gallery`);

const galleryListArr = galleryItems.map((image) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>`;
});

const listTemplate = `${galleryListArr.join(``)}`;

galleryEl.insertAdjacentHTML(`beforeend`, listTemplate);

//визначаємо змінну, для видимості в усіх функціях
let instance;

galleryEl.addEventListener(`click`, openOriginal);

function openOriginal(event) {
  event.preventDefault();

  if (event.target.tagName === `IMG`) {
    instance = basicLightbox.create(
      `<img class="modal" src="${event.target.dataset.source}">`,
      {
        onShow: (instance) => galleryEl.addEventListener(`keydown`, onEscape),
      },
      {
        onClose: (instance) =>
          galleryEl.removeEventListener(`keydown`, onEscape),
      }
    );
    instance.show();
  }
}

function onEscape(e) {
  if (e.code === "Escape") {
    instance.close();
    instance = null;
  }
}
