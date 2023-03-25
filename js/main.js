import {randomIntInRange} from './util.js';

const createPhoto = (id) => {
  return{
    id: `${id}`,
    url: `photos/${id}.jpg`,
    description: `Full pants of random: ${id}`,
    likes: randomIntInRange(15, 200),
    comments: randomIntInRange(0,200),
  };
};

function getPhotosArray() {
  array = Array.from({length: 25});
  for (let i = 0; i <= 25; i++) {
      array[i] = createPhoto(i);
  }
  return array;
}

console.log(getPhotosArray());
