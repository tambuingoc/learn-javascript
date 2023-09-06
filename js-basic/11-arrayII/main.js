var courses = [
    {
        id: 1,
        name: 'JavaScript',
        coin: 0
    },
    {
        id: 2,
        name: 'PHP',
        coin: 0
    },
    {
        id: 3,
        name: 'ReactJS',
        coin: 200
    },
    {
        id: 4,
        name: 'NodeJS',
        coin: 400
    }
];

//forEach()
courses.forEach(function(index, course) {
    console.log(index, course);
})

//every()
var isAllFree = courses.every(function(course, index) {
    return course.coin == 0;
});
console.log(isAllFree);

//some
var isSomeFree = courses.some(function(coure, index) {
    return coure.coin == 0;
});
console.log(isSomeFree);

//find
var course = courses.find(function(course, index) {
    return course.name === 'PHP';
})
console.log(course);

//filter
var listCourse = courses.filter(function(course, index) {
    return course.name === 'PHP';
})
console.log(listCourse);