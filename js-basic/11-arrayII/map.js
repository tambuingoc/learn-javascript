var courses = [
    {
        id: 1,
        name: 'JavaScript',
        coin: 0
    }, 
    {
        id: 2,
        name: 'TypeScript',
        coin: 200
    }, 
    {
        id: 3,
        name: 'React',
        coin: 450
    }, 
    {
        id: 4,
        name: 'HTML/CSS',
        coin: 0
    }
];

function declarationFuction(course, index, originArray) {
    return {
        id: course.id,
        name: `Course: ${course.name}`,
        coin: `${course.coin} coins`,
        index: index
    } 
    // return course.name; //array
};

var newCourses = courses.map(declarationFuction);
console.log(newCourses);