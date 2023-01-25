require('./server_functions/operations');

const express = require('express');
const { createServer } = require("http");
const jwt = require("jsonwebtoken");
const mysql = require("mysql2")

const { Server } = require("socket.io")
const path = require('path');
var cors = require('cors')
const { _generateOrder, _generateWeatherRecord } = require('./server_functions/operations');
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: ["http://localhost:8080", "http://192.168.1.64:8080", "http://localhost:4200", "http://192.168.1.64:4200"]
    }
});
const port = process.env.PORT || 3000;
let messagesStore = [];
var corsOptions = {
    origin: "http://localhost:4200"
}

io.on("connection", (socket) => {
    console.log(socket.id);
    socket.on("private message", (anotherSocketId, msg) => {
        socket.to(anotherSocketId).emit("private message", socket.id, msg);
    });

    socket.on("message", (content) => {
        console.log(content);
        messagesStore.push(content);
        //socket.emit("message", messagesStore);
        io.emit("message", messagesStore);
    });


});

app.use(cors(corsOptions));

app.get('/weatherforecast', cors(), (req, res) => {
    console.log('get list of forecasts');
    const orders = [
        _generateWeatherRecord(),
        _generateWeatherRecord(),
        _generateWeatherRecord(),
    ];
    res.send(orders);
});

app.get('/listoforders/:order', cors(), (req, res) => {
    console.log(`get order ${req.params.order}`);
    const orders = [
        _generateOrder(req.params.order)
    ];
    res.send(orders);
});

app.get('/listoforders', cors(), (req, res) => {
    console.log('get list of orders');
    const orders = [
        _generateOrder(),
        _generateOrder(),
        _generateOrder(),
    ];
    res.send(orders);
});

app.post('/api/login', cors(), (req, res) => {
    //console.log(req.headers);
    json_token = jwt.sign({ "user": "luis", "email": "iscluispal", "timestamp": new Date() }, "thisismysecret", { expiresIn: '1m' });
    return res.send(json_token);
    
});

app.post('/api/register', cors(), (req, res) => {
    if (req.body.username == "luis") return res.send({ "error": "user already registered" });
    return res.send({ "status": "ok" });
});

app.post('/api/verifytoken', cors(), (req, res) => {
    console.log(req.body);
    jwt.verify(req.headers.authorization.split(' ')[1], "thisismysecret", function(err, decoded) {
        if (err) { return res.send({ "isValid": false }); }
        return res.send({ "isValid": true });
    });
});

app.get('/tomographies', cors(), (req, res) => {
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "my-secret-pw",
        database: "tomography_studies"
    });
      
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query("select fspatient_name as 'patientname' from tb_tg_sessions", (err, rows, fields) => {
            if (err) throw err;
            res.send(rows);
        });
    });
});

// app.use("/", express.static(path.join(__dirname, "dist/portfolio_demo")));

// app.get('/*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'dist/portfolio_demo', 'index.html'));
// });

// app.listen(port, () => {
//   console.log(`Go to http://localhost:${port}`)
// });

httpServer.listen(3000, () => {
    console.log(`Server running, go to http://localhost:${port}`);
});