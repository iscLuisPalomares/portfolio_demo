const express = require('express')
const app = express()
const port = 3000

app.get('/listoforders', (req, res) => {
    console.log('get list of orders');
    const orders = [
        _generateOrder(),
        _generateOrder(),
        _generateOrder(),
    ];
    res.send(orders);
});

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function _generateOrder() {
    var generators = [ "Luis", "Itai", "Carlos", "Nestor", "Fabian", "Gustavo", "LuisG", "Octavio", "Cardenas" ];
    var randomNum = getRandomNum(0, 60);

    return {
        Approver: 1,
        DateApproved: DateTime.Now,
        DateCreated: DateTime.Now.AddDays(-1 * randomNum),
        DueDate: DateTime.Now.AddDays(getRandomNum(30, 50)),
        FinishDate: DateTime.Now.AddDays(getRandomNum(25, 60)),
        Generator: generators[getRandomNum(0, generators.Length - 1)],
        StartDate: DateTime.Now.AddDays(getRandomNum(-7, 7)),
        MRNumber: mr ?? "MR" + (getRandomNum(1000, 5000)).toString(),
        ProdLine: getRandomNum(1, 15),
        QTY: getRandomNum(100, 200),
        QTYPackage: getRandomNum(1, 20),
        SKU: "A" + (getRandomNum(100, 200)),
        STATUS: getRandomNum(0, 7)
    };
    /*
private List<Order> _generateOrdersList()
        {
            List<Order> ordersList = new List<Order>();
            for (int i = 0; i < 10; i++)
            {
                ordersList.Add(_generateSingleOrder());
            }
            
            return ordersList;
        }

        private Order _generateSingleOrder(string? mr = null)
        {
            Random randomGenerator = new Random();
            int randomInt = randomGenerator.Next(0, 60);

            string[] generators = { "Luis", "Itai", "Carlos", "Nestor", "Fabian", "Gustavo", "LuisG", "Octavio", "Cardenas" };

            return new Order
            {
                Approver = 1,
                DateApproved = DateTime.Now,
                DateCreated = DateTime.Now.AddDays(-1 * randomInt),
                DueDate = DateTime.Now.AddDays(randomGenerator.Next(30, 50)),
                FinishDate = DateTime.Now.AddDays(randomGenerator.Next(25, 60)),
                Generator = generators[randomGenerator.Next(0, generators.Length - 1)],
                StartDate = DateTime.Now.AddDays(randomGenerator.Next(-7, 7)),
                MRNumber = mr ?? "MR" + (randomGenerator.Next(1000, 5000)).ToString(),
                ProdLine = randomGenerator.Next(1, 15),
                QTY = randomGenerator.Next(100, 200),
                QTYPackage = randomGenerator.Next(1, 20),
                SKU = "A" + (randomGenerator.Next(100, 200)),
                STATUS = randomGenerator.Next(0, 7)
            };
        }

    */
    
}

app.use('/', express.static('dist/portfolio_demo'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})