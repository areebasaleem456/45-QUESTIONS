// question13
var transports = ["honda", "tesla", "corolla"];
transports.forEach(function (transport) { console.log("one day i will own ".concat(transport, ".")); });
var seasons = ["summer", "winter", "autumn", "spring"];
seasons.forEach(function (season) { console.log("".concat(season, "is my favorite season.")); });
//QUESTION14
var guests = ["tooba", "sara", "hiba", "amna"];
guests.forEach(function (guest) { console.log("".concat(guest, ", you are invited to my dinner party.")); });
// QUESTION 15 CHANGE GUEST LIST
var unableToAttend = "tooba";
console.log("".concat(unableToAttend, "cant make it to dinner today."));
// REPLACEMENT OF GUESTS
var newGuest = "neha";
guests[guests.indexOf(unableToAttend)] = newGuest;
// NEW INVITATION
guests.forEach(function (guest) { console.log("DEAR ".concat(guest, ", would you like to join me for todays dinner.")); });
