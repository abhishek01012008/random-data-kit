# random-data-kit

A lightweight JavaScript library for generating random users, names, emails, usernames, and unique IDs. Useful for testing, mock data, and development.

[![npm version](https://img.shields.io/npm/v/random-data-kit)](https://www.npmjs.com/package/random-data-kit)
[![npm downloads](https://img.shields.io/npm/dm/random-data-kit)](https://www.npmjs.com/package/random-data-kit)

## Features

- Generate random users.
- Generate multiple users at once.
- Generate random names.
- Generate email addresses.
- Generate usernames.
- Generate unique-looking IDs.
- Customize user age ranges.
- Lightweight and easy to use.
- No external dependencies.

## Installation

Install the package using npm:

```bash
npm install random-data-kit
```

## Quick Start

Import the functions you need:

```javascript
import { generateUser, generateUsers } from "random-data-kit";

// Generate one user
const user = generateUser();

console.log(user);

// Generate 100 users
const users = generateUsers(100);

console.log(users);
```

### Sample Output

```javascript
{
  id: "usr_a12bc34de567",
  name: "Aarav Sharma",
  email: "aarav.sharma1234@example.com",
  username: "aarav_sharma5678",
  age: 25,
  city: "Delhi",
  isActive: true
}
```

*Output is randomly generated, so your results will be different.*

## Available Functions

| Function | Description |
|---|---|
| `generateUser()` | Generates one random user |
| `generateUsers(count)` | Generates multiple users |
| `generateName()` | Generates a random full name |
| `generateEmail(name)` | Generates an email from a name |
| `generateUsername(name)` | Generates a username from a name |
| `generateId(prefix)` | Generates a random ID |

## API Documentation

### 1. generateUser(options)

Generates a single random user.

```javascript
import { generateUser } from "random-data-kit";

const user = generateUser();

console.log(user);
```

**Options:**

| Option | Type | Default | Description |
|---|---|---|---|
| `minAge` | Number | `18` | Minimum user age |
| `maxAge` | Number | `60` | Maximum user age |

Example:

```javascript
const user = generateUser({
  minAge: 20,
  maxAge: 30
});

console.log(user);
```

### 2. generateUsers(count, options)

Generates multiple random users.

```javascript
import { generateUsers } from "random-data-kit";

const users = generateUsers(10);

console.log(users);
```

Generate 100 users with a custom age range:

```javascript
const users = generateUsers(100, {
  minAge: 18,
  maxAge: 35
});

console.log("Total users:", users.length);
```

### 3. generateName()

Generates a random full name.

```javascript
import { generateName } from "random-data-kit";

const name = generateName();

console.log(name);
```

### 4. generateEmail(name)

Generates an email address using the supplied name.

```javascript
import { generateEmail } from "random-data-kit";

const email = generateEmail("Aarav Sharma");

console.log(email);
```

Example output:

```text
aarav.sharma1234@example.com
```

### 5. generateUsername(name)

Generates a username using the supplied name.

```javascript
import { generateUsername } from "random-data-kit";

const username = generateUsername("Aarav Sharma");

console.log(username);
```

Example output:

```text
aarav_sharma5678
```

### 6. generateId(prefix)

Generates a random ID with an optional prefix.

```javascript
import { generateId } from "random-data-kit";

const id = generateId();

console.log(id);
```

Example output:

```text
usr_a12bc34de567
```

You can also provide a custom prefix:

```javascript
const id = generateId("product");

console.log(id);
```

Example output:

```text
product_a12bc34de567
```

## Complete Example

```javascript
import {
  generateUser,
  generateUsers,
  generateName,
  generateEmail,
  generateUsername,
  generateId
} from "random-data-kit";

console.log("Single User:");
console.log(generateUser());

console.log("Multiple Users:");
console.log(generateUsers(5));

console.log("Random Name:");
console.log(generateName());

console.log("Random Email:");
console.log(generateEmail("Rahul Sharma"));

console.log("Random Username:");
console.log(generateUsername("Rahul Sharma"));

console.log("Random ID:");
console.log(generateId("user"));
```

## Error Handling

The package validates user counts and age ranges.

Invalid user count:

```javascript
generateUsers(-1);
```

Invalid age range:

```javascript
generateUser({
  minAge: 40,
  maxAge: 20
});
```

Both throw an error when the supplied values are invalid.

## Use Cases

- Generating mock users for frontend development.
- Creating sample data for API testing.
- Populating development databases.
- Testing pagination and search functionality.
- Generating dummy data for projects.

## Important Notes

- Generated emails use the reserved `example.com` domain. They are not real email addresses.
- Names and cities are selected from predefined lists.
- Generated usernames and emails are not guaranteed to be unique.
- IDs are randomly generated; collisions are extremely unlikely but not impossible.
- This package is intended for development and testing, not production identity generation.

## Requirements

- Node.js
- npm

The package uses JavaScript ES modules.

## Contributing

Contributions, suggestions, and bug reports are welcome.

Feel free to open an issue or submit a pull request.


## Author

Created as a lightweight utility package for generating random test data.

## Links

- [npm Package](https://www.npmjs.com/package/random-data-kit)
- [raise issues](https://github.com/abhishek01012008/random-data-kit/issues)
