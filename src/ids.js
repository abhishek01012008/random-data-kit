import { randomBytes } from "node:crypto";

export function generateId(prefix = "usr") {
    return `${prefix}_${randomBytes(6).toString("hex")}`;
}