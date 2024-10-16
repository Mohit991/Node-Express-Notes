# Node JS
## Introduction  
<img width="478" alt="{7DEDAF94-FA28-4992-A2D5-92895EBB76FC}" src="https://github.com/user-attachments/assets/580f377c-8906-4341-93c7-dc25bc477942">  

<img width="474" alt="{AF7CE40C-BFF7-4345-B08C-4241ED77ED26}" src="https://github.com/user-attachments/assets/4e867da4-cd82-4577-b89e-4ad93dbb613d">  

<img width="477" alt="{DDD62AAE-AA57-4BD3-AF14-1B7979A44A14}" src="https://github.com/user-attachments/assets/8643b84d-ba42-4e0d-90b2-5f6f837dc77b">  

<img width="477" alt="{99B2D011-6DB8-4697-AC30-7E55CDEA606F}" src="https://github.com/user-attachments/assets/589089fb-787a-46cf-965f-7499d28eaf4d">  

<img width="479" alt="{37007288-C6A3-49FB-9E6D-FEFAE0AADD25}" src="https://github.com/user-attachments/assets/c439f987-e4c2-40f8-8b7f-8e8032888a3d">  


Check node version on your system: 
1. Open CMD or terminal from VS code
2. Command: `node -v`

Intilize the package.json file: 
1. Go to the proper directory
2. Command: `npm init`
3. Put all the details

package.json looks like this:  
![image](https://github.com/user-attachments/assets/32e78339-afe8-4879-bef4-930f59dacd7e)  

We have to add `"start": "node index.js"` maunally in the scripts. 
This means when I hit `npm start`, it will automatically run `node index.js`  
Folder structure so far:  
<img width="183" alt="{6030AD09-61D4-4E37-9403-7CE0BB3C4EDE}" src="https://github.com/user-attachments/assets/de0c3665-1feb-4b09-a601-d33c961e9299">  

We have created index.js file.   
index.js so far:  
<img width="448" alt="{A85DD60A-90F1-4BFE-9421-F6932F584A1B}" src="https://github.com/user-attachments/assets/414a4818-f56a-4124-8929-1e0b5afcd798">  

We can run this file in two ways:  
1. `node index.js`
2. `npm start`

Install nodemon to run js files seemlessly. 
`npm i nodemon`  
Change the package.json file. Instead of node index.js in start in script, we put nodemon index.js 

Exiting from a node js program. To exit from a node js program programatically, we can use `process.exit(1)` or `process.exitCode = 1`  
![image](https://github.com/user-attachments/assets/ee29a359-a6cb-48cb-a607-aa3b3fd39b7f)  

Output:  
<img width="445" alt="{465FF5F5-5D59-4EEB-9321-89EC34923E17}" src="https://github.com/user-attachments/assets/a00a3f4e-c606-41cf-a4b3-1188cfb1359a">  

## Topics
### Environment variables file (.env)
Folder structure:  
<img width="184" alt="{62B4AA88-118D-487C-A9D3-2CD5C564ABD0}" src="https://github.com/user-attachments/assets/04558ca8-26cb-49db-a3f8-77921a7e40cc">  

.env File:  
![image](https://github.com/user-attachments/assets/bd80006c-fbe3-4b56-833b-d61e5a94e597)  

We need a package for this to work. The package is called dotenv. 
Commmand: `npm i dotenv`  
How to access these env vars in index.js:  
![image](https://github.com/user-attachments/assets/119b9ede-05d3-4906-8eac-f677aef466df)  

`require("dotenv").config()` tells node where to pick the env vars which is the .env file.  

### Passing argument to JS file
I created a JS file called argument.js:  
<img width="189" alt="{5D8410A8-3117-4F6F-9613-89D9D67D665F}" src="https://github.com/user-attachments/assets/a99155a8-7c2f-4a9b-a9c0-5663edf8ca7c">  

**Passing argument:**
`node argument.js arg1`  

**Reading arguments:**  
`process.argv` gives us below things:  
1. Node location
2. JS file location
3. Argument

argument.js file:  
![image](https://github.com/user-attachments/assets/76b7b58b-8664-42bc-973c-3524107087da)  

Output:  
<img width="441" alt="{B5D2EF21-2DE1-454B-92CC-D4F128891692}" src="https://github.com/user-attachments/assets/033c01c6-8931-46c9-815b-0e773a22c223">  

To read just the agrument:  
argument.js file:  
![image](https://github.com/user-attachments/assets/14e6f7c5-593a-40e4-9796-0413d2c4d4fb)  

Output:  
<img width="446" alt="{94949033-C2F1-4888-BE4A-1102FBB27958}" src="https://github.com/user-attachments/assets/c519ae3f-6a12-44e1-b5d8-64aba582b5b6">  

### Format specifier  
![image](https://github.com/user-attachments/assets/5cae3b3d-690c-44e3-bc8b-b1af8214633c)  

### Function trace
Code:  
![image](https://github.com/user-attachments/assets/98805cfc-6816-4c54-9ac6-b32a8d3282c0)  

Output:  
<img width="443" alt="{9AF3BD7D-0EFF-4005-9A74-6FC7C257C5E7}" src="https://github.com/user-attachments/assets/5c536e41-3a18-44e2-9038-149ed80ef091">  

### Measuring time taken by functions
Code:  
![image](https://github.com/user-attachments/assets/40955c66-c22e-4221-97de-183a0bf223f4)  

Output:  
<img width="444" alt="{E77BDC96-2B4D-4A24-9A8F-EDFC860A1634}" src="https://github.com/user-attachments/assets/6e833cb0-d132-4c66-8cb2-37a056de9a7b">  

## Node Package Manager (NPM)
To see the npm version:  
`npm -v`  
![image](https://github.com/user-attachments/assets/4a04e41d-e3f2-45b9-9103-38b77a28b654)  

### npm commands
![image](https://github.com/user-attachments/assets/6134d65d-8c0d-4cad-a3a9-a54e5a67004e)  

**npm init**  
Initlize the repository. Create the package.json file in the repository.  

**npm install or npm i**  
Installs all the packages in the package.json  

**npm install <package_name>**  
Installs a specific package. 

**npm install <package_name> --save-dev**  
Installs a specific package into dev dependencies. 

**npm install <package_name>@<version_number>**  
Installs a specific version of a specific package.

**npm update**  
Updates all of the packages to the latest version available in the npm registry.  

**npm update <package_name>**  
Updates the specific package to the latest version available in the npm registry.  

**npm update <package_name>@<version_number>**  
Updates the specific package to a specific version.  

**npm run <script_name>**  
package.json will have a script object. This object will have many scripts. You can run any script by mentioning the name of the script. eg npm start, npm run dev etc.  
![image](https://github.com/user-attachments/assets/b237300b-cf5b-4216-aa47-2c81f0a5f0fb)  

**npm list**  
Lists all the packages installed in your project.  

**npm list -g**  
Lists all the packages installed globally.  

**npm uninstall <package_name>**  
Uninstall the package

### package.json file
Contains all the details about our project. Name, version, dependencies, scripts, author, license etc.  
![image](https://github.com/user-attachments/assets/dfc4967c-5d21-447a-bfba-a82ab98293d7)  

### package-lock.json file
package.json will have the package name and the version. But it has a carrot symbol in the front. See:  

`"dependencies": {
    "dotenv": "^16.4.5",
    "nodemon": "^3.1.7"
  }`

package-lock.json file will contain the exact version and additional details about the package. See:  
`"node_modules/dotenv": {
      "version": "16.4.5",
      "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-16.4.5.tgz",
      "integrity": "sha512-ZmdL2rui+eB2YwhsWzjInR8LldtZHGDoQ1ugH85ppHKwpUHL7j7rN0Ti9NCnGiQbhaZ11FpR+7ao1dNsmduNUg==",
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://dotenvx.com"
      }
    },`

package-lock.json is crucial for locking dependencies to specific versions, ensuring consistent installations across different environments. Without it, variations in installed versions may occur. This file guarantees reproducibility by specifying exact versions, preventing discrepancies. Including both package.json and package-lock.json in source control ensures that collaborators install the exact dependencies, maintaining uniformity.  
package.json defines the project’s basic dependencies and configuration, while package-lock.json locks down the entire dependency tree to specific versions, ensuring consistent and reproducible builds. Together, they provide a robust system for managing dependencies in Node.js projects.  

### Semantic Versioning
![image](https://github.com/user-attachments/assets/691ef059-e4ca-46bc-b399-ad5cc41952d7)  

First digit is 4, second is 18 and third is 1.  
![{1FE0A0EC-91D9-4ED8-B88A-FFAF629F0F87}](https://github.com/user-attachments/assets/53f08ddd-d0d4-454c-8c86-1767e9ef6e0d)  

**Carrot symbol (^)**  
This symbol means the minor version or the patch version can be changed. So, if we run `npm update`, the package can be changed to the latest minor version or the latest patch version. With the carrot symbol the package will never be changed to the newer major version(first digit).  
![image](https://github.com/user-attachments/assets/5e20a111-553a-4d3c-b581-3fc8325c72bd)  

**Tild symbol (~)**
Only update to the latest patch version. So, if we run `npm update`, the package can be changed to the latest patch version. With the tild symbol the package will never be changed to the newer major  or minor version. 
![{113F1F3B-DC1D-4412-8774-E96019BE5D62}](https://github.com/user-attachments/assets/4acfd943-cac2-4a44-892e-2734e9a2c368)  

### Exporting from JS files
**moldule.exports**  
![{5DAE71FB-7975-4D4E-B764-8C65FFB10632}](https://github.com/user-attachments/assets/552f0773-8805-44e5-9c91-c620008e033a)  

Using it in index.js:  
![{8D4DDBEB-EEB6-4388-856A-C472475D47B5}](https://github.com/user-attachments/assets/b86b82a9-f7de-4a86-ad7c-f6c891b63b91)  

You can given any name to the object in index.js  
![{8CDD17A6-54C1-4775-83D7-FF60BA8E2DCE}](https://github.com/user-attachments/assets/74b2bf36-afd3-41b7-9663-cfe2a5ac4aa2)  

**exports.data**
With this we will export data as an object. 
![{AEC4D475-6306-41FD-9D9A-73606BA5B605}](https://github.com/user-attachments/assets/fbf97627-3e06-48ba-9954-cf9796569c73)  

Using it in index.js  
![{94F1BF15-8D0E-4C40-A811-A0950EF250D8}](https://github.com/user-attachments/assets/0a91f595-6f60-4cb2-84b4-fe48dbc6514d)  

Exporting multiple objects:  
![{F30F0220-1AF8-4E4F-AE07-75EA6D634BAE}](https://github.com/user-attachments/assets/c8a4f994-899b-4767-ad22-e77c09d2d337)  

Using it in index.js  
![{77ABBBD4-7D34-4796-8D5A-A1FC20C11989}](https://github.com/user-attachments/assets/8bd95377-cac0-44f8-b62b-d8abb5877da9)  

Another way:  
![{7CBB98A9-9C39-41D9-921C-CFF461A89142}](https://github.com/user-attachments/assets/a3493ac5-594f-48c2-9489-4d53fc505c80)  

Using it:  
![{E3D12D01-D92E-41B3-B255-E5A1ABCA6726}](https://github.com/user-attachments/assets/7e558d99-a2a0-4457-80e1-3a314f1ca8bb)  

## Error Handling in Node JS
### Using Error class
We created an error.js file. In this file we will create an error object and pass a message to it. We then print the error stack.  
![image](https://github.com/user-attachments/assets/03a42b28-ebb3-4e96-b799-c4b60cf90aca)  

Output:  
<img width="455" alt="{91C19586-5386-4C98-BF25-714690526CBA}" src="https://github.com/user-attachments/assets/8a95be4c-9579-4192-a470-9173bead1e60">  

If we just want to see the message, we can go for error.message:  
![image](https://github.com/user-attachments/assets/9b5afaae-8d48-4104-86ad-ad71d65bd5c1)  

Output:  
<img width="453" alt="{82D0D19E-F85B-44A7-8D89-FAE6FC846C67}" src="https://github.com/user-attachments/assets/e015cb6d-a0b7-42fb-85f7-cebf310023e5">  

Throwing an error using the throw keyword:  
![image](https://github.com/user-attachments/assets/34338d6f-eaba-4fa4-afea-f697b07d1147)  

Output:  
<img width="444" alt="{FCC9F080-5EE0-4529-97D2-026A6996B153}" src="https://github.com/user-attachments/assets/000d057a-9b47-40f8-91c7-42f1d7e59c7c">  

### Creating custom error class  
Folder Structure:  
<img width="182" alt="{96E0181C-7A17-4632-8F0F-2F3B7BFA5D16}" src="https://github.com/user-attachments/assets/19f23168-05cc-4942-8e96-19296d086d05">  

CustomError.js  
![image](https://github.com/user-attachments/assets/a8507d2c-4cbd-4f11-ab14-fadbea368ef3)  


Error.js  
![image](https://github.com/user-attachments/assets/8ebf48d1-02e4-4381-8d4e-55964b16504f)  

Output:  
<img width="444" alt="{AA4FD4AE-AC0F-403A-ADBF-1B089D730DDF}" src="https://github.com/user-attachments/assets/55e7be34-7dc0-415b-b5b5-0b334cfd513f">  

### Try Catch
error.js  
![image](https://github.com/user-attachments/assets/d7911ffc-da24-4df7-aac7-bb43f77fee90)  

doSomething() is never created. Hence we should get an exception in the try block and move to the catch.  
<img width="440" alt="{763689E6-797C-4AEE-B968-231ADD463986}" src="https://github.com/user-attachments/assets/ff155e7e-ede3-4e90-947d-813a6367f010">  

We get a reference error saying doSomething() is not defined.  
We can fix it by defining the doSomething()  
![image](https://github.com/user-attachments/assets/e4c1540e-3d50-464d-b867-2be3606666ff)  

Output:  
<img width="446" alt="{CF257D87-0054-4649-BD18-1FE083210C48}" src="https://github.com/user-attachments/assets/153b0352-9de1-4eac-ad3d-bb4ec33d24bb">  

Another example of an error:  
![image](https://github.com/user-attachments/assets/ca1d7fe7-6c25-4395-b7ac-1a22621d19b0)  

We are calling an API which does not exist. Hence an exception should occure.  

<img width="448" alt="{031E70BC-A502-4244-92A4-CAD153B0A6DC}" src="https://github.com/user-attachments/assets/ec831e8f-b36d-4a2d-a750-81b97b3ca892">  

Expception says fetch failed.  


### Exception with promises  
![image](https://github.com/user-attachments/assets/e301bda9-0c01-46d3-853c-9c81420bb4e1)  

### Exception with async/await
![image](https://github.com/user-attachments/assets/59006d79-8b76-4002-a72f-b016fe2cc52f)  

Output:  
<img width="439" alt="{F3ED145E-3092-457C-999F-CAAC365770B3}" src="https://github.com/user-attachments/assets/0c3e90bd-8cbd-4a45-9daf-67dcc8000308">  

## File System and Path Module  
Directory name, basename, extension of a file:  
![image](https://github.com/user-attachments/assets/3c2e24cc-d9ba-4bab-b64f-4b99c76c2543)  

Output:
<img width="654" alt="{5F5587EB-866B-4E7D-8E6E-350D3C4E7825}" src="https://github.com/user-attachments/assets/2d5a2a35-6911-4625-895e-6644b99c4227">  

More:  
![image](https://github.com/user-attachments/assets/541411e9-88b0-4cd3-82f3-ea913414d7cf)  

Joining Path:  
![image](https://github.com/user-attachments/assets/14c4260e-8e96-46ea-b0e6-62f9f8c7356d)  

Output:  
<img width="642" alt="{BD4682B1-DBF8-48A3-B6C2-08B137A152F5}" src="https://github.com/user-attachments/assets/160eb792-de9d-4eb6-aff0-8909d43514f9">  

### Using fs(file system) module
![image](https://github.com/user-attachments/assets/efa83fa6-86da-413d-8e4a-6e7501b1ede6)  

It shows some buffers:  
<img width="437" alt="{0B0E5A17-A688-4909-A764-CD8E0A5C3D73}" src="https://github.com/user-attachments/assets/5080f056-94c6-4838-8367-a230ebe29a07">  

Making it readable:  
![image](https://github.com/user-attachments/assets/163fc6c8-6c7f-4a0a-bfdc-1127660dc5df)  

Output:  
<img width="443" alt="{0DAF4213-72FB-4B12-AA3D-0B758D7379FD}" src="https://github.com/user-attachments/assets/f86b0d3c-78ac-4046-88f1-4e47af977014">  

readFile method reads the file in asynchronous way. To read a file in synchronous way, we can use readFileSync.  
Lets use both path and fs modules together.  
![image](https://github.com/user-attachments/assets/27e94f14-7e0e-45bd-b084-ea967afe8614)  

For writing a file, we use writeFile() and writeFileSync() methods.  

## Async Programming
See the code below:  
![image](https://github.com/user-attachments/assets/33d04c8c-3ae2-4a38-9908-7d28877af71a)  

See the output:  
<img width="445" alt="{22AA3893-2E28-463E-8930-D71359F5629B}" src="https://github.com/user-attachments/assets/d982ec7a-859f-40b8-8be4-effb0bdc866c">  

The code is executed sequentially. First line then second line and so on.  
This is sync programming.  
See the code below:  
![image](https://github.com/user-attachments/assets/bb07afe8-1ec4-4532-8977-5e798089f6fe)  

Explaination: We are trying to create a delay in the execution. First we log `Start Operation` and then we call the sleep method.  
In the function, we first log `Operation is running` then we check if 1000 ms have passed from the current time or not. While we check this we log `In Progress`. Once we are done we log `Operation is done`.  
Then After the completion of the function we log `Do something else`.  

Output:  
<img width="442" alt="image" src="https://github.com/user-attachments/assets/296f0285-5e02-458c-be3a-c9fc23bdd7ec">  
<img width="448" alt="{C559C08F-38A5-4A22-8828-4A0C56919D60}" src="https://github.com/user-attachments/assets/ca617ccf-d789-430c-baf1-190e75bd909a">  

This is sync code. The execution happens one line then next line in sequence.  

### How sync code executes
<img width="478" alt="{B3439AE9-8BCF-4FD0-8C7E-9E0DE92B8882}" src="https://github.com/user-attachments/assets/b63f42b4-9818-4007-9c16-51013833437e">  

JS runtime engine has two parts. Heap and the call stack.  
Heap has the memory allocation.  
Call stack will have the functions which we need to execute.  
Remember that JS runs on a single thread. 
In JavaScript, the **global execution context** is the environment in which your code runs when it's not inside any function. It's the base-level context, and it's created when the JavaScript engine starts executing your script.  

For our code:  
<img width="469" alt="{4F23FEF3-0F66-4CB5-BD69-46F56950D5ED}" src="https://github.com/user-attachments/assets/674a0bda-c6f6-4e56-874e-7f5dcfe226f2">  

Final result:  
<img width="445" alt="image" src="https://github.com/user-attachments/assets/e80e8c2e-4119-4bdf-9a51-c29763a7a1f0">  

See the asnyc code:  
![image](https://github.com/user-attachments/assets/2f4a5c52-fa38-432a-8f9d-5e58bc6695ce)  

See the output:  
<img width="434" alt="{CAE7009B-0158-465E-BA50-1A45E04C1B65}" src="https://github.com/user-attachments/assets/4f73c8ff-c1af-4b8d-9c25-d98ff662377a">  

`Do something else` is printed before `operation is done!` which should not be the case in case of sync programming. But here, when we execute the setTimeout, we do not wait for its execution and simply move on to the next statement.  
So, sync code is blocking as it blocks the execution until a statement is not completed. Async code on the other hand is non-blocking.  
How sync code executes on the single thread:  
First, `Start Operation` is printed.  
<img width="467" alt="{BB35B738-B717-446A-89BB-FCE7EA14006E}" src="https://github.com/user-attachments/assets/911f7ce7-6d6b-4773-8413-fe36ef5f0860">  

Then, sleep() is called. `Operation is running` is printed.  
<img width="474" alt="{8866BAFD-3AA3-45EB-BF80-63A13443D6BD}" src="https://github.com/user-attachments/assets/6de96083-870f-43e9-8034-de61a7a86d71">  

Then setTime() is called.  
<img width="477" alt="{339BA88B-D0F4-4AE2-858B-EAF49B8F402D}" src="https://github.com/user-attachments/assets/6d56a60a-9e97-4e2c-aea1-d8d9ef554bcb">  

cb in the picture means callback function.  
1000 is the milliseconds we will wait for.  
When the call stack sees the setTimeout(), it pops it out from the call stack and gives this setTimeout() to the web API. The browser has the web API on a different thread. The web API will execute your async code. Async functions include setTimeout(), setInterval(), event listeners etc.  
<img width="474" alt="{3F966102-8ED3-47E9-8ABD-70504962C0BC}" src="https://github.com/user-attachments/assets/f1e21297-f812-4d08-9aa2-f8f74386b048">  

All such callback events, when entered in the call stacks, are going to be passed to the web API which is a seperate execution thread.  
After this `Do something else` is printed.  
<img width="471" alt="{D103E19E-2406-48FF-ADF5-F88D273052FE}" src="https://github.com/user-attachments/assets/86cb4f7f-8678-4c9a-ba3d-0beabd205fd5">  

In the web API, setTimeout() registers itself in the event table. Event table will then put this callback function in the task queue. All async task functions such as setTimeout(), setInterval(), addEventListerners, or AJAX calls etc. whomever accepts any callback functions are executed in such manner.  
So, all the callback functions are passed to the task queue. Task queue will wait for the call stack to get empty and all the execution is finished.  
Once the call stack is empty, the event loop will come into the picture.  
Event loop will pass all the callbacks from the task queue to the call stack.  
<img width="462" alt="image" src="https://github.com/user-attachments/assets/75289f59-3fb3-4937-8295-167888a4a05b">  

<img width="468" alt="{FA7A0DF5-2DD1-408C-A8F1-AA0231D7AC5D}" src="https://github.com/user-attachments/assets/bf05c5e6-144c-4218-9916-4ff82f840e99">  

Finally, the call stack will do the execution of the callback functions.  
<img width="455" alt="{9AF5A31F-4992-4615-A28B-626B543FBD78}" src="https://github.com/user-attachments/assets/70886896-9258-4841-b6d3-7089147e5c50">  

Finally, `operation is done!` is printed.  
This is how async execution is done in JS.  
Call stack is a single thread and we cannot perform async tasks on a single thread.  
Note: JS is sync and single threaded language, but we can handle async tasks.  
## Callback and Callback Hell
Callback Function: It is a function which is passed as an argument to another function. The function to which this function is passed as an argument will exeucte this function at a later point of time.  
Callbacks by themselves are not async. They are sync in nature.  
Code:  
![image](https://github.com/user-attachments/assets/cc2c9388-654a-48ed-ab35-5cbea9a02ae1)  

Output:  
<img width="443" alt="{6DC9BF8C-4F4A-4B65-BC03-E2450D699B37}" src="https://github.com/user-attachments/assets/64512527-fded-409a-add4-153e878a6c77">  

Everything is happening in sync way.  
We have to make the callbacks async manually.  
See this code:  
![image](https://github.com/user-attachments/assets/7e2a05ec-268e-4890-972c-ba5d48f69f32)  

Gives error:  
<img width="442" alt="{C5C3861C-6D76-42B5-B44F-6F299EE81809}" src="https://github.com/user-attachments/assets/a2438920-9927-4d3e-8cfe-fcd469c3686b">  

Error is coming because callbacks are sync by nature. If we make it async then all the JS vars are created in memory first and then the callback is executed.  
To change it to async, we will have to use something like setTimeout() etc. 
See the code:  
![image](https://github.com/user-attachments/assets/70651b21-095a-4859-a5ec-45bc5284edb8)  

This time the function ran and printed the correct output. 
Output:  
<img width="446" alt="{CF8F76F0-1937-4F7E-9D9A-79DC440852A0}" src="https://github.com/user-attachments/assets/4b6c9205-3f15-46ff-be0d-c9856abb9e60">  

We can also use async await to achive the same result.  
### Error Handling
![image](https://github.com/user-attachments/assets/1969a01f-a8e4-467b-b891-edd4f336a984)  

`asyncTask((err, data) => {}` we have two arguments in our callback function. The first is the error and the second is the data. 
The first argument is always going to be data and the second argument is always going to be data.  
Code:  
![image](https://github.com/user-attachments/assets/35683687-c437-4881-a001-29806f8691ca)  

Output:  
<img width="443" alt="{6C69A4B1-8A8F-4BDF-A8DA-1D58AAB1B4DB}" src="https://github.com/user-attachments/assets/bef5461c-3999-43f8-b44a-924893bc74b6">  

### Callback Hell
Callback hell refers to the situation in JavaScript where multiple nested callbacks create complex, deeply indented code, often called the “pyramid of doom.” This structure makes the code difficult to read, debug, and maintain, resulting in poor code quality and scalability issues.  

Code:  
![image](https://github.com/user-attachments/assets/f7ebc5b5-bd71-413c-a7e7-9f10c904c50d)  

When a function is passed as an argument to another function, it becomes a callback function. This process continues and there are many callbacks inside another's Callback function.
This grows the code horizontally instead of vertically. That mechanism is known as callback hell.  

### Promises
![image](https://github.com/user-attachments/assets/cbe568b7-3ce1-4623-9fcb-60187722a7e8)  

First we create a promise using the Promise class. We pass a callback function. The function will get two arguments: resolve and reject.  
Inside the function, based on certain condition, we can call the resolve function or the reject function. In the resolve or reject, we can pass any number of arguments. Here, we are passing messages; Success or Failure. 
We call the promise p at line 11. p.then will get a call back, then is called if we call resolve from the promise ie if the promise is resolved. We have a callback in the p.then, which gets the message from resolve. 
p.catch is called in case promise if rejected. We have a callback in the catch as well. This gets the argumnet sent from the reject method. 
Output in case promise is resolved:  
<img width="443" alt="{57DB76EB-98C8-4020-A756-7DD6CFD7F893}" src="https://github.com/user-attachments/assets/758d6406-e8f9-419b-a63d-d4e43e6608c4">  

Output in case of promise is rejected:  
Code:  
![image](https://github.com/user-attachments/assets/e4524d0a-43ac-4c82-84e0-1f19a52ce748)  

Output:  
<img width="445" alt="{1B9999B7-C176-4329-8033-18B33E939354}" src="https://github.com/user-attachments/assets/a5a073bd-aec3-4d15-9ad2-2db9d62277c9">  

Promises help us to prevent callback hells.  
Calling multiple promises together using Promise.all():  
<img width="466" alt="{6333A002-DE0B-46EB-A033-BF88325336D3}" src="https://github.com/user-attachments/assets/a970ed32-28f5-4271-9805-fff234287a45">  

We pass an array of callbacks, they are executed one after the other. Once all the promises are resolved, we go to the then method. then will receive an array which will have messages from all three of the promises. See the output.  
Note: All the promises are running at the same time when we call them using Promise.all(). 
Promise.race() is exactly same as Promise.all() but Promise.all() goes to then once all of the promises are finished while Promise.race() will go to the then method as soon as the first promise is resolved. See the output. In the then we only got the message for the first callback because race goes to then as soon as the first promise is resolved.  
Another example:  
![image](https://github.com/user-attachments/assets/00749cb6-741f-45e9-8fdd-3afb4f5eb0e0)  

Output in case of resolve:  
<img width="447" alt="{8F95B1FF-5BB8-4AE7-BC34-7B18FA1F62CB}" src="https://github.com/user-attachments/assets/e3f62e9b-8a3c-4555-9645-cb8d6d463b1b">  

Output in case of reject:  
<img width="445" alt="{51FED784-45EC-40D2-9740-3E34223DE94A}" src="https://github.com/user-attachments/assets/9a64f7fa-4ea0-41a2-879d-e5788e3b71b4">  

Using finally:  
![image](https://github.com/user-attachments/assets/56cbf73b-7039-4db8-804e-077ee727c884)  

Another note is that if you throw an error inside a promise, the promise will be considered as rejected and you will move to the catch method.  
Callbacks are sync and we can make them async by using setTimeout() etc. 
Promises on the other hand are async in nature.  
See the code:  
![image](https://github.com/user-attachments/assets/f2ed5d31-a18e-45f5-89f2-2c30d71b226f)  

Output:  
<img width="443" alt="{71951B85-6DD8-45BF-B1C0-C5D77E637E23}" src="https://github.com/user-attachments/assets/27c8b814-d82f-4a32-9ddd-791b7313fc95">  

In callbacks, this would have been an error but with promises this is not an error but it works.  

### Promise Chaining
Promise chaining means chaining the then methods of the promises. First the first then will be executed and then the next then and so on.  
We can also pass values to the next then from the previous then by returning some value. See the code:  
![image](https://github.com/user-attachments/assets/bbc29a5a-61f3-4832-9948-730a71efffd7)  

Output:  
<img width="440" alt="{D6278349-25EE-4FFE-BCF7-DEA0CC3F67F0}" src="https://github.com/user-attachments/assets/dbade4f0-b74c-48d0-b283-d6afd5a406f4">  

In case of reject:  
![image](https://github.com/user-attachments/assets/f0fd780a-6626-4eaf-8af6-ccc206ae9905)  

Output:  
<img width="446" alt="{F1C8F442-FFD0-47C3-A5D1-EEE91F6FE1DF}" src="https://github.com/user-attachments/assets/8c9a361f-8360-439c-acbf-2ae4a9637a6b">  

Using Promise.all() again:  
This time we will call an APIs using setTimeout(). See the code:  
![image](https://github.com/user-attachments/assets/df64d7d8-64c1-41bf-8dca-33e6a3c65b45)  

Remember that Promise.all() will execute all the promises simultenously.  
Output:  
![{55EE1A48-8307-4F31-8042-F1C0B4EC5301}](https://github.com/user-attachments/assets/7fcd1c19-113b-4f22-96b5-14b7636aeaa5)  

Let's now use Promise.race()  
![image](https://github.com/user-attachments/assets/c71cc016-e086-4ad8-a13f-8bb457be7cb4)  

Output:  
![{B4681E08-56A7-4FFD-8C4A-394A243EA371}](https://github.com/user-attachments/assets/841e4199-2dd7-4aef-9f2e-fb0d5ebd54ea)  

200ms API is in the output because race returns the first promise which was resolved. Since 200ms is the least time hence this was completed first.  

### Async Await
See below code we are using for user authentication.  
![image](https://github.com/user-attachments/assets/6e2672fe-4bb9-4d74-a344-ee83f09bf5cd)  

Output:  
![{520EA8CC-A484-4BB9-A4EB-C115AB5C28F0}](https://github.com/user-attachments/assets/bc7b0e14-cc94-432b-9260-5bc0781adc35)  

Since promises are async by nature, we see that we move to the home page after authenticating the user. This happens because the credentials are correct.  
What happens when the user authentication is not correct?
Let's see:  
![image](https://github.com/user-attachments/assets/104f1400-6376-4ef2-8a6b-aeaebf71a2c6)  

Output:
![{FB7D97B9-2701-4859-95DF-592BAC680C87}](https://github.com/user-attachments/assets/ae88289b-b110-4955-9f1c-09117c7682c1)  

Exception occured. We can add a .catch to catch such exceptions.  
![image](https://github.com/user-attachments/assets/84eeb2df-6615-4e1a-9587-df8d5dd6e0e6)  

Output:  
![{0E47E223-C35D-42A0-A0FE-984811147368}](https://github.com/user-attachments/assets/4d0625b0-96b9-4c76-9c5d-2207d484adce)  

Let's do the same thing using async await.  
![image](https://github.com/user-attachments/assets/cdc61ef1-caef-4f7e-b81f-914ed7aeb76e)  

Output:  
![{5B026DDE-DA1B-4398-AC58-03B18F65D717}](https://github.com/user-attachments/assets/5b60480b-d884-43c3-9795-a666773927b4)  

But for wrong credentials, same thing is happening. We are getting an exception.  
Let's handle it.  
![image](https://github.com/user-attachments/assets/87e3b369-9a88-44cd-ae64-00825880063f)  

Important: Do not forget to use async and await keywords properly. Otherwise what happens is that userLogin() and goToHomePage() will return a promise instead of what they have in resolve and reject. Which will cause issues.  

### Performance
In Promise.all(), we execute all the promises at the same time. 
If we do the same thing we async await, then it will happen sequentially because await will stop for the first one to execute. Then second will be executed and then third will be executed.  
So, async await can decrease your performance since we are executing sequntially instead of parallely in case of Promise.all().  

## Build REST API CRUD Project
<img width="469" alt="{0F413C94-FB73-4414-99B2-01A41E3C10E1}" src="https://github.com/user-attachments/assets/0da4e964-6c27-40e1-8c4d-8cbb8b263490">  

### REST API Conventions  
<img width="475" alt="{737CD397-9AA4-4B21-8416-B89C28897F86}" src="https://github.com/user-attachments/assets/761c9368-c5ba-411a-8cef-405ce4a965dd">  

### Creating REST API Project using Node (NO ADDITIONAL LIBRARY)
Let's first create the package.json file using `npm init`  
Let's create server.js file inside the directory. 
Let's add start script in scripts in the package.json file.  
![image](https://github.com/user-attachments/assets/2937b9e1-a21a-4a85-a14b-fd791a5320a8)  

We can run the application using `npm start`  
Let us now create a .env file which will have our enviornment variables.  
Folder structure:  
<img width="187" alt="{6974B73D-7E96-41C1-87CF-226D44E99A78}" src="https://github.com/user-attachments/assets/8b9db8f6-d13e-4e94-93f9-050bbd83b8da">  

We will use thunder client extension to call the APIs.  
Let's see the server.js file:  
![image](https://github.com/user-attachments/assets/7c4e33a6-30cb-42f4-b199-c27a0180fcb0)  

Let's hit the localhost 5000 and see the result.  
<img width="480" alt="{EFEEC6BA-4556-4733-B5AF-62780B424F94}" src="https://github.com/user-attachments/assets/8abc8062-842b-4dfc-a49f-9e171434f1db">  

By default, this is a GET request to localhost:5000  
Let's go to inspect and then network tab.  
<img width="477" alt="{0CD0DBCA-2F4E-403B-A68C-A5DCB87C62ED}" src="https://github.com/user-attachments/assets/2312cd2b-fa3e-4c25-b51c-42def9194c83">  

This is a get request as you can see.  
Let us see what the thunder client says about this:  
<img width="441" alt="{2994CA3C-9B0B-4E0E-81C9-D4FD89CD862F}" src="https://github.com/user-attachments/assets/f791ec77-0b22-41c6-b302-06582006d642">  

Let's see the updated folder structre:  
<img width="202" alt="{164AB8FC-B6E9-49AF-93DE-D0D2D853FA84}" src="https://github.com/user-attachments/assets/fc0bb878-acfc-46d6-852c-11070013f894">  

data folder contains the data which we will send from the backend API. For now, we are just going to send static data instead of data coming from a database.  
movies.json:  
![image](https://github.com/user-attachments/assets/585dc862-4f9c-46dc-9760-a8be302d9ae8)  

methods folder will contain the methods which we will call for API calls.  
We have four different files for four different request types.  
Let's see the updated server.js which will make use of the methods.  
server.js  
![image](https://github.com/user-attachments/assets/76448911-cdfa-448a-a057-37fc4658df49)  

### Get All Movies
Let's now create the methods.  
Here is the get-request.js file:  
We are creating a get method to get all the movies:  
![image](https://github.com/user-attachments/assets/1c88ced2-989d-42d7-89b3-429faf83d9a0)  


Let's send a request to this API and see what we get.  
<img width="478" alt="{3B04880B-8B56-4E6C-ACA3-816AE7E817F6}" src="https://github.com/user-attachments/assets/d2e5fba7-4724-4a02-867b-04b9569bf6f0">  

### Get a Specific Movie
To get a specific movie, we will have to get the id of the movie from the request URL.
Let's split the URL using below code:  
`let id = req.url.split("/")`  
We got:  
`[ '', 'api', 'movies', 'dsfdsfdsf' ]`  
We need the last index of this. Let's get that:  
`let id = req.url.split("/")[3]`  
Let's create a REGEX to check if the uuid is correct of not:  
I took it from the internet:  
`const regrexV4 = new RegExp(
        /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i
    );`  

Let's see the complete code.  
![image](https://github.com/user-attachments/assets/c005e72a-f08e-4547-b410-b6a90e3d9ed2)  

### Creating a movie
When we send the data to the server in a post request. We have to send it in request body. To get the body, we use body-parser. We can use that in express but in pure node, we need to use something else.  
Let's create a util folder and body-parser.js file inside to read the body.    
![image](https://github.com/user-attachments/assets/3ae6a00a-cb6c-4bf8-9388-7ef5bdd7acb0)  

We also need to add this data to the movies.json file:  
Let us make use of path and fs modules from node to construct the path and write to the json file.  
We will create a write-to-file.js in util folder. See the code:  
![image](https://github.com/user-attachments/assets/69e32f52-5da4-425e-9d37-24c8e6cfe30e)  

This code will write the data into the movies.json file.  
Now, post is completed. See the post-request.json  
![image](https://github.com/user-attachments/assets/ca295e8c-4ff9-4176-bb16-1ec46e0825c6)  

### Delete a movie
See the delete-request.js file:  
![image](https://github.com/user-attachments/assets/023987cb-f1ac-4b8e-897f-8867f076eaf6)  

### Updating a movie
See the put-request.js file:  
![image](https://github.com/user-attachments/assets/6c3ddb48-b003-4512-8273-ab21e9f27fef)  



































































