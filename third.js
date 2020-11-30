/*
    Task #3
    We only have to check the following code and answer the question - is it possible to change the const object

    const user1 = {
    name: "John"
    };

    user.name = "Pete";
*/

    const user1 = {
        name: "John"
    };

    // is this ok?
    user1.name = "Pete";

    console.log(user1.name);

    //Of course it's ok, cause we cannot change the value of const object (like user = {};), not its properties

    console.log("\n");