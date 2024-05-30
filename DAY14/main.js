// QUESTION 40 ALBUM
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Anas", "Title 1");
var album2 = make_album("Hamza", "Title 2");
var album3 = make_album("Areeba", "Title 3", 5);
console.log(album1);
console.log(album2);
console.log(album3);
// QUESTION 41 MAGICIANS
var you_tubers = ["Merium", "Maaz", "Saad"];
function vlogging(you_tubers) {
    you_tubers.forEach(function (you_tuber) { console.log("".concat(you_tuber, " are most trending youtubers.")); });
}
vlogging(you_tubers);
// QUESTION 42 THE GREAT MAGICIANS
function theGreat(you_tubers) {
    if (you_tubers === void 0) { you_tubers = [""]; }
    for (var i = 0; i < you_tubers.length; i++) {
        you_tubers[i] = you_tubers[i] + "the great";
    }
}
theGreat(you_tubers);
vlogging(you_tubers);
