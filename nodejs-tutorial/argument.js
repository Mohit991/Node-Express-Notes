console.log(process.argv.slice(2)[0]) //accessing the given argument

process.argv.forEach((val, index) => {
    console.log(`${index}:${val}`);
})