const makeApiCall = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("This API was executed in " + time + " ms.")
        }, time)
    })
}

let apiCalls = [makeApiCall(1000), makeApiCall(200), makeApiCall(1500)]

// Promise.all(apiCalls).then((values) => {
//     console.log(values);
// })

Promise.race(apiCalls).then((values) => {
    console.log(values);
})
