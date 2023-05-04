// import { changeEffect } from './slider';

const effectsList = document.querySelector('.effects__list');
const img = document.querySelector('.img-upload__preview');

const setEffect = (newEffect) =>{
  img.classList = '';
  img.classList.add(`effects__preview--${newEffect}`);
  // changeEffect(newEffect);
};


effectsList.addEventListener('change', (evt) => {
  const currentEffect = evt.target;
  if (currentEffect.tagName !== 'INPUT') {
    return;
  }
  setEffect(currentEffect.value);
  // if (previousEffect !== null) {
  //   img.classList.remove(`effects__preview--${previousEffect}`);
  // }
  // img.classList.add(`effects__preview--${currentEffect}`);
  // previousEffect = currentEffect;
});
