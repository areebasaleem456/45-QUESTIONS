// QUESTION 43 UNCHANGED MAGICIAN

function show_magicians(magicians:string[]){
    magicians.forEach(name =>{console.log(name)});
}
function make_great(magicians:string[]){
    return magicians.map(name => `The Great ${name}`)
}
let magician_names=["Harry Porter","Mr Bean","Pokeman"]
let copy_magician=magician_names.slice()

let copy_great_magicians=make_great(copy_magician)

console.log("\n Original Array ")
show_magicians(magician_names)

console.log("\n Copied Array \n")
show_magicians(copy_great_magicians)

// QUESTION 44: "SANDWICH"

function make_sandwich(...items:string[]){
    console.log("\n Sandwich ingridient:")
    items.forEach(singleItem=>{console.log(singleItem)})
    console.log("\n Now Enjoy Sandwich..\n\t")
}
    make_sandwich("Chicken","Coleslaw","bread")
    make_sandwich("Mayonise","Cucumber","Tomato","Sauces")
    make_sandwich("Fries","Onion","Omlette")

// QUESTION 45:"CARS"

function create_car(manufacturer,model,...features){
 let car={
    manufacturer:manufacturer,
    model:model
 }
 features.forEach(feature=>{
    let [key,value]=feature.split(":");
    car[key.trim()]=value.trim()
 })
 return car;
}
let my_car=create_car("Toyota", "Corolla", "Color:Black", "Sunroof:True")
console.log(my_car);