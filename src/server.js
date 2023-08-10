let express = require("express");
let { Pool } = require("pg");
//let env = require("../env.json");

const hostname = "localhost";
const port = 3000;

let app = express();
// let pool = new Pool(env);

app.use(express.static("public"));
// pool.connect().then(() => {
//     console.log("Connected to Database");
// });


app.listen(port, hostname, () => {
    console.log(`Server listening on: http://${hostname}:${port}`)
});