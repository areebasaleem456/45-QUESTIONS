//QUESTION16
let guests=["maria","qaria","omema","eman","hafsa"];
console.log("GREAT NEWS! i have a big dinner table");

//adding more guests:
guests.unshift("kiran");
guests.splice(1,2);
guests.push ("sundus");
guests.forEach(guest=>{console.log(`${guest} would you like to join us?`)})

// QUESTION17 SHRINKING GUEST LIST
let members=["shazia","afshan","ayesha","atia"];
console.log("UNFORTUNATELY! we can't found a big table.");

let removedMember=members.pop();
console.log(`sorry ${removedMember} i can't invite you.`);

members.forEach(member=>{console.log(`${member} you are still invited.`)})

members.splice(1,2);
console.log(members);

// QUESTION18 //reverse alphabetical order
let places=["Islamabad","Swat","Hunza","Malamjabba"]
places.sort(function(a,b){return b.localeCompare(a)})
console.log(places)


//orignal order
let places1=["Islamabad","Swat","Hunza","Malamjabba"]
console.log(places1)

//alphabetical order
let places2=["Islamabad","Swat","Hunza","Malamjabba"]
places2.sort();
console.log(places2)

//reverse orderet places
let places3=["Islamabad","Swat","Hunza","Malamjabba"]
places3.reverse()
console.log(places3)










