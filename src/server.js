let express = require("express");
let { Pool } = require("pg");
let { createClient } = require("redis");
let env = require("../env.json");

// Use when address already in use error
//https://stackoverflow.com/questions/4075287/node-express-eaddrinuse-address-already-in-use-kill-server

const hostname = "localhost";
const port = 8080;

const client = createClient();
let app = express();
let pool = new Pool(env);

(async () => {
    try {
        client.on('error', err => console.log('Redis Client Error', err));
        await client.connect();
        console.log("Connected to redis");
    } catch (error) {
        console.log("Could not connect to redis", error);
    }
})();

app.use(express.static(__dirname + "/public"));
app.use(express.json());
pool.connect().then(() => {
    console.log("Connected to postgres");
});

app.post("/cache", async (req, res) => {
    let { key, value } = req.body; 
    await client.set(key, value);
    res.send("info has been cached");
});  

app.listen(port, hostname, () => {
    console.log(`Server listening on: http://${hostname}:${port}`);
});

// redis-cli flushdb - deletes all keys from the connections current database