// QUESTION 34 PIZZAS
var pizza = ["tikka", "cheesy", "fajita"];
pizza.forEach(function (pizza) { console.log("I love ".concat(pizza, " flavour.")); });
console.log("I am craving for pizza.");
// QUESTION 35 ANIMALS
var animals = ["cat", "dog", "lion"];
animals.forEach(function (animal) { console.log("I have ".concat(animals, ".")); });
console.log(" I love pet animals.");
// question 36 customize t shirts
function t_shirt(size, message) {
    return size + message;
}
var size = "Medium";
var message = ("Focus on your goals..");
t_shirt(size, message);
console.log("I want my shirt in size ".concat(size, " and print message ").concat(message, " in it.."));
