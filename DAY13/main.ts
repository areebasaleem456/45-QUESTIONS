// QUESTION 37 LARGE SHIRTS
function make_shirts(size:string="Small", message:string="I love customize t-shirts.")
{
    console.log(`Make a shirt of size ${size} and print a message that ${message}.`)
}
make_shirts()
make_shirts("Medium")
make_shirts("Large")

// QUESTION 38 CITIES
function cities(city:string="Karachi",country:string="Pakistan"){
    console.log(`${city} is in ${country}.`)
}
cities()
cities("Lahore")
cities("Swat")

//QUESTION 39 CITY NAMES
function place(city:string,country:string){
   return city + country
}
let place1=place("Islamabad","Pakistan")
console.log(place1)
