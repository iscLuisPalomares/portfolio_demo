require('./server_functions/operations');

const express = require('express');
const { createServer } = require("http");

const { Server } = require("socket.io")
const path = require('path');
var cors = require('cors')
const { _generateOrder, _generateWeatherRecord } = require('./server_functions/operations');
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:4200"
    }
});
const port = process.env.PORT || 3000;
let messagesStore = [];

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

// io.on("message", (content) => {
//     console.log(content);
//     messagesStore.push(content);
//     io.emit(messagesStore);
// })

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