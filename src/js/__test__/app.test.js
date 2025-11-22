import Validator from "../app.js";

test("valid: letters only", () => {
  expect(Validator.validateUsername("Alice")).toBe(true);
});

test("valid: letters with digits (_ and - allowed inside)", () => {
  expect(Validator.validateUsername("aaa11_-31Zaaaa")).toBe(true);
});

test("invalid: 4 digits in a row (not allowed)", () => {
  expect(Validator.validateUsername("aaa1131Zaaa")).toBe(false);
});

test("invalid: starts with digit", () => {
  expect(Validator.validateUsername("1aaa1131aaaa")).toBe(false);
});

test("invalid: ends with underscore", () => {
  expect(Validator.validateUsername("aaa1131aaaa_")).toBe(false);
});

test("valid: single-letter username allowed", () => {
  expect(Validator.validateUsername("Z")).toBe(true);
});

test("invalid: contains invalid character (space)", () => {
  expect(Validator.validateUsername("john doe")).toBe(false);
});

test("valid: exactly three digits in a row is allowed", () => {
  expect(Validator.validateUsername("aa123bb")).toBe(true);
});
