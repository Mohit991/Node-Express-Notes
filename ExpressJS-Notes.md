# ExpressJS
<img width="352" alt="{33D7285C-7847-4527-9D67-555B234B6523}" src="https://github.com/user-attachments/assets/c9b2763c-3b6d-4f78-8398-b90c7fba7809">  

<img width="427" alt="{B1E54817-5859-4B92-A83B-75074130B6E3}" src="https://github.com/user-attachments/assets/1680a4cb-0d7a-4bec-a24b-a5c4ed9c863a">  

<img width="420" alt="{F9A51D42-0E61-4E1E-9625-6F8CD716544E}" src="https://github.com/user-attachments/assets/84b55933-9c59-446c-94cd-2d4e66e0ce2f">  

<img width="432" alt="image" src="https://github.com/user-attachments/assets/38b32f83-13e6-47c3-aa62-5011e316caea">  

## Setup
Installing Express:
First, `npm init` to initlize the repo.  
Second, `npm i express` to install the express package.  
Third, create the index.js file.  

## Creating Basic ExpressJS App
### Folder Structure
<img width="221" alt="{33EECC67-7B22-44B2-8A32-53B70296DDAD}" src="https://github.com/user-attachments/assets/1ef93f58-66da-4501-8967-23ee37337152">  

### index.js File
![image](https://github.com/user-attachments/assets/fe8c86b6-3b66-4e5f-a1e9-6e2bf28e24c5)  

### package.json File
![image](https://github.com/user-attachments/assets/0d99c76a-75e4-4adf-85ee-fc87d0dc0aa7)  

### Starting the app
`npm start`

### Output
<img width="443" alt="{2BCC8660-B3F1-439C-8F6F-6CE47747AFF4}" src="https://github.com/user-attachments/assets/e5cee13e-cebd-401a-83d2-e9c98d2b3bf3">  

### Creating Routes
index.js file:  
![image](https://github.com/user-attachments/assets/4f2d0056-8a58-4b85-9c54-c1a85a5be085)  

Output at the browser:  
<img width="482" alt="{F6EE367E-44FB-43FA-80AF-172BB6627477}" src="https://github.com/user-attachments/assets/f4a6a664-77fa-4918-854d-3f355f6b09fd">  

Sending a json as a response:  
Code:  
![image](https://github.com/user-attachments/assets/2ea4edca-2be5-4afa-8607-714c25d270b8)  

Output:  
<img width="477" alt="{D426550C-D610-407E-9F9C-B3B1C5CC17D5}" src="https://github.com/user-attachments/assets/af771668-320e-4f27-8a67-75a44f23e1a8">  

See the index.js file with basic routes created.  
![image](https://github.com/user-attachments/assets/45a40766-2f1d-4dbd-b1ef-2ed7bb6be346)  

## Express Generator
Command:  
`npx express-generator <app_name>`  
This command will create files and folders.  
See the files/folders created with this command:  
<img width="223" alt="{E56EA621-C6B4-4126-A467-89DCEE6D8E32}" src="https://github.com/user-attachments/assets/66232d46-c112-4319-9172-8b3b1850a320">  

See the package.json file and see the packages already installed:  
![image](https://github.com/user-attachments/assets/34c24a0d-d1ac-4b51-befc-97c9585f674e)  

Let's install the dependencies using `npm i`  

### Understanging Each Folder and their Role
**bin folder with one file called www**  
When you use the Express Generator to create a new Express.js application, it generates a bin folder containing a file named www.
Here's the role of the bin/www file:  
**Entry point**: It serves as the main entry point for your application. When you start your Express app (e.g., using npm start), this file is executed.
Server setup: It sets up the HTTP server and handles the listening port.  
**Error handling**: It includes basic error handling to gracefully manage unexpected errors.
Application initialization: It imports and initializes your main application logic from the app.js file.
  
**Understanding the workflow**:
**npm start**: When you run npm start, it checks your package.json file for the start script. Typically, this script is set to node ./bin/www.
bin/www execution: Node.js executes the www file.
**Server creation**: The www file creates an HTTP server instance and configures it to listen on a specific port (usually 3000).
**app.js initialization**: The www file requires the app.js file, which contains your Express application configuration and routes.
**Server start**: The server starts listening for incoming requests.
In most cases, you don't need to modify the bin/www file directly. It provides a solid foundation for running your Express app, and you can focus on building your application logic in the app.js file and other related files.

**public folder**:  
<img width="228" alt="{691FCD14-0943-4CB1-9FA9-FE289CECCE63}" src="https://github.com/user-attachments/assets/9bb8ebe1-1b34-44e4-aa6f-aa11894db727">  

This will contain your static files.  

**routes folder**:  
<img width="217" alt="{B0ECA166-D143-477B-9CFF-CD85ACBAA0C3}" src="https://github.com/user-attachments/assets/c4e8a071-e0cb-465e-ab06-831ad111e7d2">  

For routing purposes.  
See the users.js file in route folder:  
![image](https://github.com/user-attachments/assets/d7e6cf3a-4da4-4d8e-9cae-0f401e8a8255)  

**views folder**:  
<img width="222" alt="{CDAA8C58-B028-4D23-BE18-3D14D4A93869}" src="https://github.com/user-attachments/assets/ae29822b-0af3-444e-9a06-9e5c8cf5adea">  

These are the views shown in the browser.  
**app.js file**  
![image](https://github.com/user-attachments/assets/8fa15386-fb34-467f-958a-d43583f797a0)  

**Running the App**:
`npm start` will run the app.  
Browser:  
<img width="475" alt="{6197D6D7-BFB8-45D2-8DF3-4358612C6A40}" src="https://github.com/user-attachments/assets/6dab872b-b0c4-48ff-a1a4-c4b9c5c2644b">  

The browser shows some UI. These views are coming from the views folder.  
We first go to app.js then to index.js in router folder. Then we load the view from the views folder.
We can send any view from express to the client on any route. 
We can use the render method to send a view. 
See the index.js file from the routes folder.  
![image](https://github.com/user-attachments/assets/3f64eee1-057b-4286-bd44-8cb2c32dd488)  

## Middleware
<img width="478" alt="image" src="https://github.com/user-attachments/assets/e99553ac-c6c1-411f-83e0-2c7d7aee1211">  

<img width="467" alt="{B500D34B-095A-4DA6-A82A-F1E86AF0A239}" src="https://github.com/user-attachments/assets/76853bb1-c78b-40e6-9432-4d6c08309c6a">  

Middleware functions can perform the following tasks:
**Execute any code.
Make changes to the request and the response objects.
End the request-response cycle.
Call the next middleware function in the stack.**
If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

### Types of middleware
1. Application-level middleware
2. Third-party middleware
3. Router-level middleware
4. Built-in middleware
5. Error-handling middleware

### Application Level Middleware
Application-level middleware is a type of middleware that runs for all routes in an application and is executed for every incoming request. 
It's used for global tasks like logging, error handling, and parsing request bodies. 
In Express.js, application-level middleware is registered using the app.use() method. 
Some examples of application-level middleware include:
**Logging middleware**: Logs incoming requests and outgoing responses
**Authentication middleware**: Authenticates users
**Error handling middleware**: Handles errors that occur during the execution of middleware functions or route handlers 

See the index.js file:  
![image](https://github.com/user-attachments/assets/bc51389c-b332-4f3a-8f5f-6d75dd2796a4)  

This is application level middleware.  

### Router Level Middleware
Router-level middleware in Express.js is used to process requests for a specific route or group of routes. It works similarly to application-level middleware, but is bound to an instance of express.Router()
Let's get the router first.  
`const router = express.Router()`  

Let's create some routes. See the index.js:  
![image](https://github.com/user-attachments/assets/20b9a1ca-fe2f-4cee-8bbd-4c7afa321a08)  

We are getting the JSON results back when we query the correct endpoints.  
GET request at "/":  
![{AF5527FB-040F-4C6F-933B-90BB4061C64A}](https://github.com/user-attachments/assets/e6af01da-2286-433f-b8bd-06e1b0c175a2)  

POST request at "/":  
![{D2DB61DC-4775-40AF-A180-7242BDD4A888}](https://github.com/user-attachments/assets/916cd0a9-f748-4bbc-a017-ca2621d0a4c6)  

Let us now create a middleware which will act on the router level which basically means **Router Level Middleware**.  
See the code:  
![image](https://github.com/user-attachments/assets/add77f0a-6b18-4e92-acf5-8a94a302be45)  

At the moment, authStatus is true, so, tje routes are working fine. If I make it false I see the error.  
![{8067BDC9-1D78-41BE-AF51-03415780748D}](https://github.com/user-attachments/assets/a11b3b02-5496-4854-865c-14111f4bdfdf)  

We get **401 Unauthorized**. Also, we get this HTML page in response. We do not want this HTML page in case of an error. We want some JSON. To work it out, we can make use of error handling middleware.  

### Error Handling Middleware
These middleware functions have four arguments (err, req, res, next) and are used to handle errors that occur during the request-response cycle.
We will intercept the error response and we will change the response to a JSON object.  
See code for error handler middleware:  
![image](https://github.com/user-attachments/assets/30a65eb2-c8ec-4e16-9101-f3f9f0435451)  

### Built-in Middleware
Express.js comes with several built-in middleware functions, such as:
express.json(): Parses incoming requests with JSON payloads.
express.urlencoded(): Parses incoming requests with URL-encoded payloads.
express.static(): Serves static files, such as images, CSS, and JavaScript files.  

Let us send some data with the post request and try to access it.  
createUser method:  
![image](https://github.com/user-attachments/assets/f15ba94a-34be-4452-b367-4fcc6113ded6)  

Sending the post request:  
![{FFB5E956-4D84-42C5-93B9-F4F9B4178CCB}](https://github.com/user-attachments/assets/06d5e4e0-1df0-4812-ae4e-66b5cf2efe9f)  

Console after the request:  
![{8255C96F-EA5D-47F3-8662-1C537D610DD5}](https://github.com/user-attachments/assets/f636839b-8dd3-47b1-8b4a-6cec6c2e52e7)  

Request body is undefined.  
Let us use some built-in middlerware here. 
![image](https://github.com/user-attachments/assets/aba69131-6160-4f48-9bba-ad15462d2d35)  

Another built-in middleware is express.static()
We will create a public folder first. See the folders:  
![{FCADECB6-41DF-4C67-9810-8F03778D5CFD}](https://github.com/user-attachments/assets/20146cdf-7fc6-43ee-bb40-e0ad5a0dc795)  

Now, we write this code and make our public folder available.
![image](https://github.com/user-attachments/assets/a81a6589-728f-4c59-b68e-8454183ea1c1)  

If we go to any URLs such as `http://localhost:5001/images/animal.jfif` the file can be accessed or downloaded.
Let us change the URL.  
![image](https://github.com/user-attachments/assets/1d23729f-c2cd-4151-ae24-ab0793fda44d)  

Now the files are accessible via `http://localhost:5001/staic/images/animal.jfif`   

Using app.all(), see at the end:  
![image](https://github.com/user-attachments/assets/de016299-864a-4db2-9051-f1b41a2d43a7)  

### Third Party Middlewares
Express.js is a minimalist framework, which means it doesn't come with a lot of built-in functionality. Instead, it relies heavily on third-party middleware to add features and functionality to your applications.  
Here are a few popular third-party middleware used with Express: <br> 
**For handling requests and responses**:  
**body-parser**:  
Parses incoming request bodies in a middleware before your handlers, available under the body property of the request object.  
**cookie-parser**:<br>
Parses cookies attached to the request and makes them available under the cookies property of the request object.<br>
**cors**:<br>
Enables Cross-Origin Resource Sharing (CORS), allowing your server to handle requests from different origins.<br>
**multer**:<br>
Handles multipart/form-data, which is primarily used for uploading files.<br><br>
**For security and performance**:<br>
**helmet**:<br>
Sets various HTTP headers to help secure your app from common attacks like XSS, clickjacking, and more.<br>
**compression**:<br>
Compresses response bodies, improving performance and reducing bandwidth usage.<br>
**morgan**:<br>
HTTP request logger, providing detailed information about incoming requests.<br>
**rate-limiter**:<br>
Limits the rate at which requests can be made to your API, preventing abuse and overload.<br><br>
**For authentication and authorization**:<br>
**passport**: <br>
Provides authentication strategies for various authentication mechanisms like local (username and password), OAuth, and OpenID.<br>
**jsonwebtoken**:<br>
For creating and verifying JSON Web Tokens (JWTs), which are commonly used for authentication in APIs.<br>
**express-session**: <br>
Middleware to manage sessions in your Express applications.<br><br>
**How to use third-party middleware**:<br>
**Install the package**: Use npm or yarn to install the middleware package.<br>
**Import the middleware**: Use the require() function to import the middleware into your app.<br>
**Use the middleware**: Call the middleware function with app.use() to apply it to all routes, or with router.use() to apply it to specific routes.<br><br>

Here is the final index.js file:  
![image](https://github.com/user-attachments/assets/c15a05d9-b6e2-49a2-a45a-6b20dfa86cb8)  

