var lion = {

    "name": "Simba",
   "legs": 4,
   "tails":1
   
}

function myFunction(roar,roar1){


lion[roar] = roar1;

return lion;
}

console.log(myFunction("roar", "roar-roar"));
module.exports = myFunction;