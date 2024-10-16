let p = new Promise((resolve, reject) => {
    let a = 1 + 2
    if(a==2){
        resolve('Success')
    }
    else{
        reject('Failed')
    }
})

p.then((message) => {
    //then is called when the promise is resolved
    console.log('This is in the then', message);
}).catch((message) => {
    //catch is called when the promise fails
    console.log('This is in the catch ', message);
})