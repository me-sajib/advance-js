const numbers = [2, 3, 4, 5, 6, 7, 8];
// this khali bangla code below
// let output = [];
// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const square = element * element;
//     output.push(square)
// }
// console.log(output);

// medium code below

// function square(element){
//     return element * element;
// }
// advance code

// const square = element => element * element;
// const square = x => x * x;

// map three peramiter , first - element, second - index, third - full array
// const result = numbers.map(function(element, index, array){
//     return element * element
// });
// console.log(result);

// array filter this are same return array , but this are where is condition true
// const result = numbers.filter(x => x < 4);
// console.log(result);

// array find mean , only one element return value 
const isThere = numbers.find(x => x > 5);
console.log(isThere);