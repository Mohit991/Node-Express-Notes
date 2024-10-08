const promise = new Promise((resolve, reject) => {
    const apiCallSuccess = false
    if(apiCallSuccess){
        const person = {name: "Mohit"}
        resolve(person)
    }
    else{
        const err = {errorCode: "1001"}
        reject(err)
    }
})

promise.then((data) => {
    console.log("Person = " , data);
}).catch((err) => {
    console.log("Error = ", err);
}).finally(() => {
    console.log("This will always be executed regardless of resolve or reject");
    console.log("You can do some cleanup here");
})