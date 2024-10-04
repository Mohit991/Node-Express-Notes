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


 




































