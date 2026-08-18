function highAndLow(numbers){
  let arr = numbers.split(' ');
  let arrNum = arr.sort((a, b) => b - a)
  return `${arrNum[0]} ${arrNum.at(-1)}`
}
