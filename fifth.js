/*
    Task #5
    The final is coming :*

    Now we have to write a function multiplyNumeric(obj) to multiply all numeric properties of object by 2

    P.S.
    Our function returns nothing
    I wanna even say it's void function)))
    who knows that smiles
*/

let obj = {
    a: "hello",
    b: 3,
    c: false
}

console.log(obj);
multiplyNumeric(obj);
console.log(obj);

function multiplyNumeric(obj){
    for(let prop in obj) 
        if(typeof(obj[prop]) == "number") obj[prop] *= 2;
}

console.log("\n");