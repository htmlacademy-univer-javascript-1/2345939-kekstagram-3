import {randomIntInRange} from './util.js';

// export const photosArray =()=> {
//   const photos = [];
//   for (let i = 1; i <= 25; i++) {
//     photos.push(
//       {
//         id: i,
//         url: `photos/${i}.jpg`,
//         description: 'Full pants of shit',
//         likes: randomIntInRange(15, 200),
//         comments: randomIntInRange(0, 200)
//       }
//     );
//   }
//   return photos;
// };
export const createPhoto = (id) => ({
  id: `${id}`,
  url: `photos/${id}.jpg`,
  description: `Full pants of random: ${id}`,
  likes: randomIntInRange(15, 200),
  comments: randomIntInRange(0, 200),
});

export const photosArray = (descriptionNumber) =>
  Array.from({length: descriptionNumber}, (_, k) =>
    createPhoto(k+1));
