require('./server_functions/operations');

const express = require('express');
var cors = require('cors');
const { _generateOrder, _generateWeatherRecord } = require('./server_functions/operations');
const app = express()
const port = 3000


var corsOptions = {
    origin: 'http://localhost:4200'
}

app.get('/weatherforecast',  (req, res) => {
    console.log('get list of orders');
    const orders = [
        _generateWeatherRecord(),
        _generateWeatherRecord(),
        _generateWeatherRecord(),
    ];
    res.send(orders);
});

app.get('/listoforders/:order', cors(corsOptions), (req, res) => {
    console.log(`get order ${req.params.order}`);
    const orders = [
        _generateOrder(req.params.order)
    ];
    res.send(orders);
});

app.get('/listoforders', cors(corsOptions), (req, res) => {
    console.log('get list of orders');
    const orders = [
        _generateOrder(),
        _generateOrder(),
        _generateOrder(),
    ];
    res.send(orders);
});


app.use('/', express.static('dist/portfolio_demo'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`Go to http://localhost:${port}`)
})