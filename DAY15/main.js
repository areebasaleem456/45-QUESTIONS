// QUESTION 43 UNCHANGED MAGICIAN
function show_magicians(magicians) {
    magicians.forEach(function (name) { console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magician_names = ["Harry Porter", "Mr Bean", "Pokeman"];
var copy_magician = magician_names.slice();
var copy_great_magicians = make_great(copy_magician);
console.log("\n Original Array ");
show_magicians(magician_names);
console.log("\n Copied Array \n");
show_magicians(copy_great_magicians);
// QUESTION 44: "SANDWICH"
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n Sandwich ingridient:");
    items.forEach(function (singleItem) { console.log(singleItem); });
    console.log("\n Now Enjoy Sandwich..\n\t");
}
make_sandwich("Chicken", "Coleslaw", "bread");
make_sandwich("Mayonise", "Cucumber", "Tomato", "Sauces");
make_sandwich("Fries", "Onion", "Omlette");
// QUESTION 45:"CARS"
function create_car(manufacturer, model) {
    var features = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        features[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    features.forEach(function (feature) {
        var _a = feature.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
var my_car = create_car("Toyota", "Corolla", "Color:Black", "Sunroof:True");
console.log(my_car);
