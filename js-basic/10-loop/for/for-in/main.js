var myInfor = {
    name: 'Tam Bui',
    age: 22,
    address: 'Hung Yen, Viet Nam'
};

for(var key in myInfor) {
    console.log(key);
    console.log(myInfor[key]);
}

var languages = [
    'Java',
    'Python',
    'Ruby',
    'Node'
];

for(var key in languages) {
    console.log(key) //0,1,2,3
    console.log(languages[key]);
}