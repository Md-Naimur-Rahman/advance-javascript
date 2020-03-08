/*

function square (element){
    return element * element ;
}

const result = numbers.map(function(element){
    return element * element ;
})


const square = element => element * element;
const square = x => x * x;


console.log(result);


*/

const numbers = [10,21,30,41];

const result = numbers.map(x=>x*x);

console.log(result);


const bigger = numbers.filter(x=> x>21);
console.log(bigger);


const isThere = numbers.find(x=> x>21);
console.log(isThere);