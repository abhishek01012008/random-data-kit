import test from "node:test";
import assert from "node:assert/strict";

import {
    generateUser,
    generateUsers
} from "../src/index.js";

test("generates one user", () => {
    const user = generateUser();

    assert.equal(typeof user.id, "string");
    assert.equal(typeof user.name, "string");
    assert.equal(typeof user.email, "string");
    assert.equal(typeof user.username, "string");
    assert.ok(user.age >= 18 && user.age <= 60);
});

test("generates the requested number of users", () => {
    const users = generateUsers(100);

    assert.equal(users.length, 100);
});

test("respects custom age limits", () => {
    const users = generateUsers(50, {
        minAge: 20,
        maxAge: 30
    });

    for (const user of users) {
        assert.ok(user.age >= 20 && user.age <= 30);
    }
});

test("rejects invalid user counts", () => {
    assert.throws(() => generateUsers(-1));
});

test("rejects invalid age ranges", () => {
    assert.throws(() => generateUser({
        minAge: 40,
        maxAge: 20
    }));
});