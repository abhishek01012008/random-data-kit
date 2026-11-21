import { generateId } from "./ids.js";
import {
    generateName,
    generateEmail,
    generateUsername
} from "./names.js";

const cities = [
    "Delhi",
    "Mumbai",
    "Bengaluru",
    "Hyderabad",
    "Pune",
    "Kolkata",
    "Chennai",
    "Jaipur"
];

function randomItem(list) {
    const index = Math.floor(Math.random() * list.length);
    return list[index];
}

export function generateUser(options = {}) {
    const {
        minAge = 18,
        maxAge = 60
    } = options;

    if (!Number.isInteger(minAge) ||
        !Number.isInteger(maxAge) ||
        minAge < 0 ||
        maxAge < minAge) {
        throw new Error("Invalid age range");
    }

    const name = generateName();

    return {
        id: generateId(),
        name,
        email: generateEmail(name),
        username: generateUsername(name),
        age: Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge,
        city: randomItem(cities),
        isActive: Math.random() < 0.5
    };
}

export function generateUsers(count = 10, options = {}) {
    if (!Number.isInteger(count) || count < 0) {
        throw new Error("Count must be a non-negative integer");
    }

    return Array.from(
        { length: count },
        () => generateUser(options)
    );
}