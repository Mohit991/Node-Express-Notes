const p = Promise.reject("Fail")

p.then((val) => {
    console.log(val);
    return "Done2" //passed to next then as an argument
}).then((val) => {
    console.log(val);
    return "Done3"
}).then((val) => {
    console.log(val);
}).catch((err) => {
    console.log(err);
})