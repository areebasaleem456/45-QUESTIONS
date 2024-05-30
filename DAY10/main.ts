// QUESTION 28 STAGES OF LIFE
let age:number=20
if (age<2){
console.log("You are baby")
}
else if(age<7){
    console.log("You are toddler")
}
else if(age<11){
    console.log("you are kid")
}
else if(age<16){
    console.log("You are teenager")
}
else if (age>=20){
    console.log("I am an adult")
}
else{"I am elder"}

// QUESTION 29 
let fruits=["apple","mango","grapes"]
if(fruits.includes("apple")){
    console.log("I like apples")
}
if(fruits.includes("mango")){
    console.log("I like mango")
}

// QUESTION 30 HELLO ADMIN
let userNames=["admin","username1","username2","username3"]
userNames.forEach(userName=>{
    if(userName==="admin"){
        console.log("Hello admin would you like to see report?")
    } else {
        console.log(`Hello ${userName} thank you for logging.
    `)
    }});