export function randomIntInRange(min, max){
  const a = min(min, max);
  const b = max(min, max);
  return (Math.random()* (b - a) + a)

}

export function stringLengthCheck(string, length){
  return(string.length <= length)
}
