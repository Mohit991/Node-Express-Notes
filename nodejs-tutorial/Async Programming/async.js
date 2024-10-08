//sync code 

// console.log("Start Operation");

// function sleep(millisecond){
//     let startTime = new Date().getTime()
//     console.log("Operation is running");
//     while(new Date().getTime() < startTime + millisecond){
//         console.log("In Progress");
//     }
//     console.log("Operation is done");
// }

// sleep(1000)
// console.log("Do something else");

/******************************************/

// async code
console.log("Start Operation");

function sleep(millisecond){
    console.log("Operation is running");
    setTimeout(() => {
        console.log("operation is done!");
    }, millisecond)
}

sleep(1000)
console.log("Do something else");