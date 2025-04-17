import { normalizeNumber, randomString } from "./util";

test("normalizeNumber", () => {
    expect(normalizeNumber(5, 1, 10)).toBe(5);
    expect(normalizeNumber(0, 1, 10)).toBe(1);
    expect(normalizeNumber(15, 1, 10)).toBe(10);
});

test("randomString", () => {
    expect(randomString(10)).toHaveLength(10);
});
