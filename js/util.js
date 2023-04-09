export const randomIntInRange = (min, max) => {
  const a = Math.min(min, max);
  const b = Math.max(min, max);
  return ((Math.random() * (b - a) + a).floor);
};

export const findTemplate = (templateName,elementInTemplate) =>
  document.querySelector(templateName).content(elementInTemplate);

