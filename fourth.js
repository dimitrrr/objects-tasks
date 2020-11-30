/*
    Task #4
    Write a function to calculate a salary in the object salaries
    If salaries is empty return 0
*/

let salaries = {};

//get the salaries

while(true){

    let name = prompt("Enter the name of the employer or enter nothing to start calculating", "");
    if(name == "") break;
    let salary = +prompt("Enter the salary of " + name, "0");

    salaries[name] = salary;
}

console.log(calcSalaries(salaries));

function calcSalaries(obj){
    let sum = 0;
    for(let prop in obj)
        sum += obj[prop];
    return sum;
}
