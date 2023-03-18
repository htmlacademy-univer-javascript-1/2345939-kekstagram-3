export function randomIntInRange(min, max){
  let a = min(min, max);
  let b = max(min, max);
  return (Math.random()* (b - a) + a)

}

export function stringLengthCheck(string, length){
  return(string.length <= length)
}
