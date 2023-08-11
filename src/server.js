let express = require("express");
let { Pool } = require("pg");
//let env = require("../env.json");

// Use when address already in use error
//https://stackoverflow.com/questions/4075287/node-express-eaddrinuse-address-already-in-use-kill-server

const hostname = "localhost";
const port = 8080;

let app = express();
// let pool = new Pool(env);

app.use(express.static(__dirname + "/public"));
// pool.connect().then(() => {
//     console.log("Connected to Database");
// });


app.listen(port, hostname, () => {
    console.log(`Server listening on: http://${hostname}:${port}`)
});