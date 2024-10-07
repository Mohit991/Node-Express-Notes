// const error = new Error("Something went wrong!!")

// console.log(error.stack);
// console.log(error.message);

// throw new Error("I am error")


// const {CustomError} = require('./CustomError')
// throw new CustomError("I am custom error")

function doSomething(){
    const data = fetch("localhost:3000/api")
    // console.log("I am doSomething");
    return "data"
}

const foo = async () => {
    try {
        await doSomething()
    } catch (error) {
        console.log(error);
    }
}

foo()

// const promise = new Promise((resolve, reject) => {
//     if(true){
//         resolve(doSomething())
//     }
//     else{
//         reject(doSomething())
//     }
// })

// promise.then((val) => {
//     console.log(val);
// }).catch((error) => {
//     console.log("Error occured");
//     console.log(error);
// })
