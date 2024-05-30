//QUESTION16
var guests = ["maria", "qaria", "omema", "eman", "hafsa"];
console.log("GREAT NEWS! i have a big dinner table");
//adding more guests:
guests.unshift("kiran", "bushra", "neha");
guests.splice(1, 2);
guests.push("sundus");
guests.forEach(function (guest) { console.log("".concat(guest, " would you like to join us?")); });
// QUESTION17 SHRINKING GUEST LIST
var members = ["shazia", "afshan", "ayesha", "atia"];
console.log("UNFORTUNATELY! we can't found a big table.");
var removedMember = members.pop();
console.log("sorry ".concat(removedMember, " i can't invite you."));
members.forEach(function (member) { console.log("".concat(member, " you are still invited.")); });
members.splice(1, 2);
console.log(members);
// QUESTION18 //reverse alphabetical order
var places = ["Islamabad", "Swat", "Hunza", "Malamjabba"];
places.sort(function (a, b) { return b.localeCompare(a); });
console.log(places);
//orignal order
var places1 = ["Islamabad", "Swat", "Hunza", "Malamjabba"];
console.log(places1);
//alphabetical order
var places2 = ["Islamabad", "Swat", "Hunza", "Malamjabba"];
places2.sort();
console.log(places2);
//reverse orderet places
var places3 = ["Islamabad", "Swat", "Hunza", "Malamjabba"];
places3.reverse();
console.log(places3);
