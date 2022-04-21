/**
 * 1. to retart a express project automatically we need to run
 *    [npm install -g nodemon]
 * 2. then will go to our [package.json] file > inside of the "Scripts"
 *    add the following - 
 *      "start": "node index.js",
 *      "start-dev": "nodemon index.js",
 * 
 * 3. created an [app.post] in line no 32.
 * 
 * 4. inserted a middle-ware [ app.use(express.json()) ] in line no 7. 
 *    if there is anything needs to be done between client and server
 *    then middle-ware do it.
 * 
 * 5. user is sent to client side from line no 34 to 37.
 * 6. we can use query parameters. we did it in line 22.
 * 7. we can find a specific user by query parameter with 'name' parameter. 
 *    we did it in line no 21-30.
*/