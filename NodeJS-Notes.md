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
































 




































