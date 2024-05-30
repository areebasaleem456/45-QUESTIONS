// QUESTION 31 EMPTY ARRAY
let usernames=[]
if (usernames.length===0){
    console.log("We need to find some users!")
} else{
    console.log("we already have users.")
}

// QUESTION 32 CHECKING USERNAMES:
let current_users=["sara","tooba","ramsha","aiman","hiba"]
let new_users=["hiba","aiman","misbah","aamna","warda"]
new_users.forEach(new_one_user =>{
    let conditions=current_users.some(current_one_user=>current_one_user.toLowerCase()=== new_one_user.toLowerCase())
    if(conditions){
        console.log(`sorry ${new_one_user} is already taken.`)
    }
    else{
        console.log(`Congratulations! ${new_one_user} is available.`)
    }
})

// QUESTION 33 "ORDINAL NUMBER"

let numbers=[1,2,3,4,5,6,7,8,9]
for(let oneNumber of numbers){
    let ordinalNumber:string
    if(oneNumber===1){
        ordinalNumber="st"
    }
    else if(oneNumber===2){
              ordinalNumber="nd"
    }
    else if(oneNumber===3){
        ordinalNumber="rd"
    }
    else {
        ordinalNumber="th"
    }
    console.log(`${oneNumber}${ordinalNumber}`)
}