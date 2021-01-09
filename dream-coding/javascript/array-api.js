// Array quiz 10문제

// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    console.log(fruits.toString());
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const fruitsArray = fruits.split(",");
    console.log(fruitsArray);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    console.log(array.sort((a, b) => b - a));
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    array.splice(0, 2);
    console.log(array);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    for (let i in students) {
        if (students[i].score === 90) {
            console.log(students[i]);
        }
    }
}

// Q6. make an array of enrolled students
{
    for (let i in students) {
        if (students[i].enrolled) {
            console.log(students[i]);
        }
    }
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const results = students.map((element) => element.score);
    console.log(results);
}

// Q8. check if there is a student with the score lower than 50
{
    const check = students.map((element) => element.score > 50);
    console.log(check);
}

// Q9. compute students' average score
{
    const sum = students.map(element => element.score).reduce(function add(sum, currValue) {
        return sum + currValue;
    });
    const average = sum / students.length;
    console.log(sum);
    console.log(average);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students.map((element) => element.score).toString();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students.map((element) => element.score).sort((a, b) => a - b).toString();
    console.log(result);
}