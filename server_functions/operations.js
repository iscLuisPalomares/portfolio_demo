exports = module.exports = {
    _generateWeatherRecord: function() {
        return { "date": "2022-01-01", "temperatureC": 38, "temperatureF": 105, "summary": "Cloudy" };
    },
    _generateOrder: function(mrnum = null) {
        var generators = [ "Luis", "Itai", "Carlos", "Nestor", "Fabian", "Gustavo", "LuisG", "Octavio", "Cardenas" ];
        
        return {
            mrNumber: (mrnum) ? mrnum : "MR" + (getRandomNum(1000, 5000)).toString(),
            sku: "A" + (getRandomNum(100, 200)),
            "status": getRandomNum(0, 7),
            dateCreated: "2022-01-01",
            dueDate: "2022-02-01",
            qty: getRandomNum(100, 200),
            qtyPackage: 50,
            generator: generators[getRandomNum(0, generators.Length - 1)],
            startDate: "2022-01-01",
            finishDate: "2022-01-02",
            prodLine: getRandomNum(1, 15),
            approver: 1,
            dateApproved: "2022-01-01"
        };
    }
}

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}