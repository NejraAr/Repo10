var myPet = {
 species:"Cat",
    name:"Hulu",
    legs: 4 , 
    const :["cat1", "cat2"]


}

function myFunction(myObj){

    return myObj;
}

console.log(myFunction(myPet));
module.exports = {myPet, myFunction};