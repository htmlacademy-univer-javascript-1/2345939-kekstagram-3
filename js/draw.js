import {findTemplate} from './util.js';
import { photosArray } from './data.js';

export const drawPhotos = () => {
  const documentFragment = document.createDocumentFragment();
  const pictureTemplate = findTemplate('#picture', '.picture');
  const photoList = document.querySelector('.pictures');
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

