const zoomInButton = document.querySelector('.scale__control--bigger');
const zoomOutButton = document.querySelector('.scale__control--smaller');
const scaleBar = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview');

const SCALE_MAX = 100;
const SCALE_MIN = 25;

zoomInButton.addEventListener('click', () => {
  changeImageScale(SCALE_MIN);
});

zoomOutButton.addEventListener('click', () => {
  changeImageScale(-SCALE_MIN);
});

function changeImageScale(step) {
  const currScale = Number(scaleBar.value.slice(0, -1));

  if (SCALE_MIN <= currScale + step && currScale + step <= SCALE_MAX) {
    const newScale = Number(scaleBar.value) + step;
    scaleBar.value = `${newScale}%`;
    imagePreview.style.scale = newScale / 100;
  }
}
