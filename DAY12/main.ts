// QUESTION 34 PIZZAS
let pizza=["tikka","cheesy","fajita"]
pizza.forEach(pizza=>{console.log(`I love ${pizza} flavour.`)})
console.log("I am craving for pizza.")

// QUESTION 35 ANIMALS
let animals=["cat","dog","lion"]
animals.forEach(animal=>{console.log(`I have ${animals}.`)})
console.log(" I love pet animals.")

// question 36 customize t shirts
function t_shirt(size:string,message:string){
    return size + message
}
let size="Medium"
let message=("..Focus on your goals..")
t_shirt(size,message)
console.log(`I want my shirt in size ${size} and print message ${message} in it..`)