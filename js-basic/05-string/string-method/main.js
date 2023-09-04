var myString = 'Hi JavaScript Java JavaScript!  '
//1. Length
console.log(myString.length);

//2.Find index
console.log(myString.indexOf('Java')); //3
console.log(myString.indexOf('Java', 13)); 
console.log(myString.lastIndexOf('Java'));
console.log(myString.search('Java'));//3

//3. Cut string
console.log(myString.slice(0));
console.log(myString.slice(3));
console.log(myString.slice(3, 13));
console.log(myString.slice(-11, -1));

//4. Replace
console.log(myString.replace(/Java/g, 'JV'));

//5.Convert to upper case, lower case
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());

//6.Trim
console.log(myString.trim().length)

//7.Split
var languages = 'Java, Python, TypeScript';
console.log(languages.split(', '));

//8. Get character by index
const myString2 = 'Tam Bui';
console.log(myString2.charAt(6));
console.log(myString2[6]);