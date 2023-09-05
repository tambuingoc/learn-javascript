// var languages = [
//     'Java', 
//     'Python',
//     'React',
//     'PHP'
// ];

// for(var value of languages) {
//     console.log(value);
// }

// var language = 'JavaScript'

// for(var value of language) {
//     console.log(value);
// }

//Áp dụng cho Object
var myInfor = {
    name: 'Tam Bui',
    age: 22
};

for(var key of Object.keys(myInfor)) {
    console.log(key); //key
    console.log(myInfor[key]); //value
}

for(var value of Object.values(myInfor)) {
    console.log(value);
}