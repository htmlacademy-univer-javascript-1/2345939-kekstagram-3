const effectsList = document.querySelector('.effects__list');
const img = document.querySelector('.img-upload__preview');


const Effects = {
  Original: 'none',
  Chrome: 'chrome',
  Sepia: 'sepia',
  Marvin: 'marvin',
  Phobos: 'phobos',
  Heat: 'heat'
};

let currentEffect = Effects.Original;
let previousEffect = null;

effectsList.addEventListener('change', (evt) => {
  currentEffect = evt.target.value;
  if (previousEffect !== null && currentEffect!==previousEffect) {
    img.classList.remove(`effects__preview--${previousEffect}`);
    img.classList.add(`effects__preview--${currentEffect}`);
    previousEffect = currentEffect;
  }
});
