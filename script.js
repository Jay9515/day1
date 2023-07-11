function numbersThenCharacters(arr) {
  
  function isNumber(element) {
    return typeof element === "number" && !isNaN(element);
  }

  
  function sortNumbersAndCharacters(group) {
    let numbers = group.filter(isNumber).sort((a, b) => a - b);
    let characters = group.filter(element => !isNumber(element)).sort();
    return numbers.concat(characters);
  }

  
  let result = arr.map(group => sortNumbersAndCharacters(group));

  return result;
}


const example1 = [
  [11, 190, 24, 23, "n", "p"],
  [56, "f", 45], [67, "d"],
  ["f", "q", 78]
];

console.log(numbersThenCharacters(example1));


const example2 = [
  [8, 90, 54.4, "l", "j", "s"],
  [0], [1, "d","X",90,"s"],
  ["k", "e", 58],
  ["n","o","m"],
  [98,72]
];

console.log(numbersThenCharacters(example2));

