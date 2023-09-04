var languages = ['JavaScript', 'PHP', 'Ruby'];
console.log(languages.toString());

//2. Join
console.log(languages.join('-'));

//3. Pop
console.log(languages.pop());
console.log(languages.length); //2

//4.Push()
console.log(languages.push('Dart', 'TypeScript'));

//5.Shift()
console.log(languages.shift());

//6.Unshift
console.log(languages.unshift('Dart', 'Go'));

//7.Splicing
//1. Xóa, chèn
languages.splice(1, 4, 'Python'); 

//8.Concat
var languages2 = ['Node', 'C'];
console.log(languages.concat(languages2));

//9. Slicing
console.log(languages.slice(1,2));
console.log(languages.slice(-2, -1));
var copyLanguages2 = languages.slice(0);