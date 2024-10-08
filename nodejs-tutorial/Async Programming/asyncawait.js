const userLogin = () => {
    console.log("Enter username and password");
    let username = "Mohit1";
    let password = "Mohit";

    //We resolve the promise if credentials are correct
    //else we reject the promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Performing User Authentication");
            if (username === "Mohit" && password === "Mohit") {
                resolve("User Authenticated");
            } else {
                reject("Authentication Failed");
            }
        }, 1000);
    });
};

//if useAuthStatus is true, user is authenticated and we move to homepage.
//The promise inside always resolves.
function goToHomePage(userAuthStatus) {
    return Promise.resolve(`Go to homepage as : ${userAuthStatus}`);
}

//We must write async keyword before the async function
async function performTask(){
    try {
        const response = await userLogin() //we will wait here till the userLogin() is executed. 
        console.log("Validated User");
        const userAuthStatus = await goToHomePage(response) //we will wait here till the goToHomePage() is executed. 
        console.log(userAuthStatus);
    } catch (error) {
        console.log(error);
    }
}

performTask()