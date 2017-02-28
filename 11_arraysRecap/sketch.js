
// 1. simple array of strings
var list = ["Bread", "Milk", "Peanut Butter"];


// 2. Accessing array properties
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];
console.log(languages[2]);
console.log(languages.length);

// 3. Iterating over an array
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];
for(var counter = 0; counter<5;counter++)
{
    console.log(languages[counter])
}

// this also works
for(var i in languages)
{
    console.log(languages[i])
}


// 4. Heterogeneous arrays
var myArray = [30,false,"Test"];

// 5. Arrays of arrays
var arrayArray = [[1,2,3],[4,5,6],[7,8,9]];

// 6. Jagged arrays
var jaggedArray = [[15,67,82],[56,45]];

function setup(){}