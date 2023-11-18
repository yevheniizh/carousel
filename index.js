const galleryContainer = document.querySelector('.gallery-container');
const galleryItems = document.querySelectorAll('.gallery-item');
const galleryControlsContainer = document.querySelector('.gallery-controls');

class Carousel {
  constructor(container, items, controls) {
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];

    this.addEventListeners();
  }

  updateGallery() {
    this.carouselArray.forEach((el, i) => {
      el.classList.remove(...el.classList);
      el.classList.add('gallery-item');
      el.classList.add(`gallery-item-${i + 1}`);
    });
  }

  addEventListeners() {
    const [prev, next] = galleryControlsContainer.children;

    prev.addEventListener('click', (e) => {
      e.preventDefault();
      this.carouselArray.unshift(this.carouselArray.pop());
      this.updateGallery();
    });

    next.addEventListener('click', (e) => {
      e.preventDefault();
      this.carouselArray.push(this.carouselArray.shift());
      this.updateGallery();
    });
  }
}

new Carousel(
  galleryContainer,
  galleryItems,
  galleryControlsContainer
);
