function asyncTask(cb){
    setTimeout(() => {
        cb(null, "This is data from server")
        //first agrument is null which is the error. 
    }, 0)
}

function makeApiCall(cb){
    setTimeout(() => {
        console.log("Async Execution");
    }, 0)
}

makeApiCall(() => {
    makeApiCall(() => {
        asyncTask(() => {
            asyncTask(() => {
                
            })
        })
    })
})