const fs = require('fs');

//Read Table1 data
let rawtable = fs.readFileSync('table1.json');
let table1 = JSON.parse(rawtable);

//Function used to calculate BMI
exports.calculateBMI = (jsonArray) => { 
    const bmiValue = jsonArray.map( a => (a.WeightKg/Math.pow(a.HeightCm/100,2)).toFixed(2));
    return bmiValue;
}

//Function used to Map calculated BMI to data given in Table1
exports.mapBMI = (bmiArray) => {
    var result = [];
    for(let i=0;i<bmiArray.length;i++){
        let data = table1["BMI Range"].find( a => {
            if(bmiArray[i] > a.min && bmiArray[i] < a.max)
            {
                return a;
            }
        })
        result.push(data);
    }
    return result;
}