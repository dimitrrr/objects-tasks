/*
    Task #1
    All minitasks must take a single line

    1. Create an empty object
    2. Add property "name" with "John" as a value
    3. Add property "surname" with "Smith" as a value
    4. Replace "John" with "Pete"
    5. Delete name
*/

let user = {
    name: "John",
    surname: "Smith"
};

console.log(user.name + " " + user.surname);

user.name = "Pete";
console.log(user.name);

delete user.name;
console.log(user);