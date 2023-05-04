import { photosArray } from './data.js';
import { findTemplate } from './util.js';

const pictureTemplate = findTemplate('#picture', '.picture')
const photoList = document.querySelector('.pictures');

export const drawPhotos = () => {
  const documentFragment = document.createDocumentFragment();
  const photos = photosArray(25);
  photos.forEach(({url, comments, likes}) => {
    const photoElement = pictureTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__comments').textContent = comments;
    photoElement.querySelector('.picture__likes').textContent = likes;
    documentFragment.appendChild(photoElement);
  });
  photoList.appendChild(documentFragment);
};

