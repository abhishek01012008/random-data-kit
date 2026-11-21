import { generateUsers } from "../src/index.js";

const users = generateUsers(100, {
    minAge: 18,
    maxAge: 35
});

console.log("Total users:", users.length);
console.log(users.slice(0, 5));