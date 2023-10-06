# Credit card validation challenge.
Hello, I'm Gabriel. This is my implementation of the credit card validation challenge. Before we proceed, I'd like to point out a few things:

 - I know that credit card information is something that would probably require a higher level of security when sending it via API request. Therefore, if I were to implement this same solution on a production environment, I'd probably setup an HTTPS server and invest some time on researching how to parse the data more safely.
 - In the file "functions.js", some functions like "validationSuccess" and "validationFail" may seam useless, but I created them just to make it easier if some other functionality that could be triggered by one of these events was to be added later.

Now, with that said, let's run the project.
## API
The backend of this application consists of a simple Express API. I utilised Node v20.5.1 while developing it. If you already have Node installed (in case you don't have node installed you can follow the tutorial at [Download | Node.js (nodejs.org)](https://nodejs.org/en/download)), starting the server is as easy as installing the dependencies on `/api`, you can do that by navigating into the folder `cd ./api` and running `npm install` or `yarn install` (I utilised Yarn while coding). Now, all there is to do is run `npm run dev` or `yarn dev` (you need to be inside of the /api directory in order for this to work). Now, after a few seconds, you should see the message "Server running on port: 3003".

## WEB PAGE
Running the web page is as simple ass double clicking the "index.html" file that you can find inside the `/view` directory. In order for the web page to work properly, you should first start the backend server.
