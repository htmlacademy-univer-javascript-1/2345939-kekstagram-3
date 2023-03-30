export const randomIntInRange = (min, max) => {
  const a = min(min, max);
  const b = max(min, max);
  return ((Math.random() * (b - a) + a).floor);
};
