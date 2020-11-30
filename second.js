/*
    Task #2
    Create a function isEmpty(obj):
    returns true if the object is empty
    return false if the object is not empty

    P.S.
    I'll try to do with 3 types of function - function expression, function declaration and arrow function
    Sorry, I'm only learning :>
*/

console.log("Tash #2");

//objects for check
let obj1 = {
    name: "Sahad"
};

let obj2 = {};

//function declaration
function isEmptyDeclaration(obj) {
    for(let prop in obj)
        return false;
    return true;
}

//function expression
let isEmptyExpression = function(obj) {
    for(let prop in obj)
        return false;
    return true;
}

//arrow function
let isEmptyArrow = (obj) => {
    for(let prop in obj)
        return false;
    return true;
}

//time for check
console.log(isEmptyDeclaration(obj1));
console.log(isEmptyDeclaration(obj2));
console.log(isEmptyExpression(obj1));
console.log(isEmptyExpression(obj2));
console.log(isEmptyArrow(obj1));
console.log(isEmptyArrow(obj2));

console.log("\n")