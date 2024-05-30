// QUESTION 37 LARGE SHIRTS
function make_shirts(size, message) {
    if (size === void 0) { size = "Small"; }
    if (message === void 0) { message = "I love customize t-shirts."; }
    console.log("Make a shirt of size ".concat(size, " and print a message that ").concat(message, "."));
}
make_shirts();
make_shirts("Medium");
make_shirts("Large");
// QUESTION 38 CITIES
function cities(city, country) {
    if (city === void 0) { city = "Karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
cities();
cities("Lahore");
cities("Swat");
//QUESTION 39 CITY NAMES
function place(city, country) {
    return city + country;
}
var place1 = place("Islamabad", "Pakistan");
console.log(place1);
