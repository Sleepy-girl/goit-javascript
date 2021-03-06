import images from "./gallery-items.js";

const refs = {
  gallery: document.querySelector(".js-gallery"),
  modal: document.querySelector(".js-lightbox"),
  img: document.querySelector(".lightbox__image"),
  lightboxOverlay: document.querySelector(".lightbox__overlay"),
};

function galleryItems() {
  images.reduce((markup, image) => {
    markup += `
    <li class="gallery__item">
      <a class="gallery__linkk" 
      href="${image.original}">
        <img class="gallery__image" 
        src="${image.preview}"
        data-source="${image.original}" 
        alt="${image.description}">
      </a>
    </li>
    `;
    refs.gallery.innerHTML = markup;
    return markup;
  }, "");
}
galleryItems();

function openModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  // console.log(event.target.nodeName);
  refs.modal.classList.add("is-open");
  refs.img.src = event.target.dataset.source;
  // console.log(refs.image);
  refs.modal.addEventListener("click", closeModal);
  document.addEventListener("keydown", closeModal);
}

function closeModal(event) {
  if (
    event.target === refs.lightboxOverlay ||
    event.target.dataset.action === "close-lightbox" ||
    event.code === "Escape"
  ) {
    refs.img.src = "";
    refs.modal.classList.remove("is-open");
    refs.modal.removeEventListener("click", closeModal);
    document.removeEventListener("keydown", closeModal);
  }
}

refs.gallery.addEventListener("click", openModal);

// function moveToRight(event) {
//   // refs.img.alt = event.target.alt;
//   altImage = event.target.getAttribute('alt');
//  if (event.code === 'ArrowRight') {
//     moveToRight(event);
//   };
// }

// function backDropClick(event) {
//   if (event.target === event.currentTarget) {
//     closeModal();
//   }
// };
// lightboxOverlayRef.addEventListener('click', backDropClick);
