//Format specifiers
// %s for string
// %d is for decimal/number
// %i for ineteger
// %o for object

// console.log("I am %s and my age is %d", "Mohit", 25);

//Clearing the console
//console.clear()


const sum = () => console.log(`Sum of 2 and 3 is ${2+3}`);
const multiply = () => {
    console.log(`Multiplication of 2 and 3 is ${2*3}`);
}

const mesureTime = () => {
    //Calculating time for sum function
    console.time("sum()")
    sum()
    console.timeEnd("sum()")

    //Calculating time for multiply function
    console.time("multiply()")
    multiply()
    console.timeEnd("multiply()")
}

mesureTime()