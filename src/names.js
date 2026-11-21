const firstNames = [
    "Aarav",
    "Arjun",
    "Rahul",
    "Priya",
    "Ananya",
    "Rohan",
    "Ishita",
    "Kabir",
    "Meera",
    "Aditya",
    "Sneha",
    "Vikram"
];

const lastNames = [
    "Sharma",
    "Verma",
    "Patel",
    "Singh",
    "Gupta",
    "Kumar",
    "Das",
    "Reddy",
    "Malhotra",
    "Pradhan"
];

function randomItem(list) {
    const index = Math.floor(Math.random() * list.length);
    return list[index];
}

export function generateName() {
    const firstName = randomItem(firstNames);
    const lastName = randomItem(lastNames);

    return `${firstName} ${lastName}`;
}

export function generateUsername(name) {
    const username = name.toLowerCase().replaceAll(" ", "_");
    const number = Math.floor(Math.random() * 10000);

    return `${username}${number}`;
}

export function generateEmail(name) {
    const username = name.toLowerCase().replaceAll(" ", ".");
    const number = Math.floor(Math.random() * 10000);

    return `${username}${number}@example.com`;
}