// QUESTION 31 EMPTY ARRAY
var usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    console.log("we already have users.");
}
// QUESTION 32 CHECKING USERNAMES:
var current_users = ["sara", "tooba", "ramsha", "aiman", "hiba"];
var new_users = ["hiba", "aiman", "misbah", "aamna", "warda"];
new_users.forEach(function (new_one_user) {
    var conditions = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (conditions) {
        console.log("sorry ".concat(new_one_user, " is already taken."));
    }
    else {
        console.log("Congratulations! ".concat(new_one_user, " is available."));
    }
});
// QUESTION 33 "ORDINAL NUMBER"
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var oneNumber = numbers_1[_i];
    var ordinalNumber = void 0;
    if (oneNumber === 1) {
        ordinalNumber = "st";
    }
    else if (oneNumber === 2) {
        ordinalNumber = "nd";
    }
    else if (oneNumber === 3) {
        ordinalNumber = "rd";
    }
    else {
        ordinalNumber = "th";
    }
    console.log("".concat(oneNumber).concat(ordinalNumber));
}
