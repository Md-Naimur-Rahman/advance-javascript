function add (num1,num2){

    console.log([...arguments]);

    return num1 + num2 + arguments;
}

const result = add(2,3,5,7);
console.log(result);