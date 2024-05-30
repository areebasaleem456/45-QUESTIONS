// question13
let transports=["honda","tesla","corolla"]
transports.forEach(transport=> {console.log(`one day i will own ${transport}.`)});
let seasons=["summer","winter","autumn","spring"]
seasons.forEach(season=>{console.log(`${season}is my favorite season.`)});

//QUESTION14
let guests=["tooba","sara","hiba","amna"]
guests.forEach(guest=>{console.log(`${guest}, you are invited to my dinner party.`)})

// QUESTION 15 CHANGE GUEST LIST
let unableToAttend="tooba"
console.log(`${unableToAttend}cant make it to dinner today.`)
// REPLACEMENT OF GUESTS
let newGuest="neha"
guests[guests.indexOf(unableToAttend)]=newGuest;

// NEW INVITATION
guests.forEach(guest=>{console.log(`DEAR ${guest}, would you like to join me for todays dinner.`)})
