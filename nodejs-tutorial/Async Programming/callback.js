function asyncTask(cb){
    setTimeout(() => {
        cb(null, "This is data")
        //first agrument is null which is the error. 
    })
}

asyncTask((err, data) => {
    if(err){
        throw err
    }
    else{
        console.log("data = ", data)
    }
})
