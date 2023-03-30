import {randomIntInRange} from './util.js';
export const createPhoto = (id) => ({
  id: `${id}`,
  url: `photos/${id}.jpg`,
  description: `Full pants of random: ${id}`,
  likes: randomIntInRange(15, 200),
  comments: randomIntInRange(0, 200),
});

function getPhotosArray() {
  const array = Array.from({length: 25});
  for (let i = 0; i <= 25; i++) {
    array[i] = createPhoto(i);
  }
  return array;
}
