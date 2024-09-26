const { increment, decrement } = require("../inc_dec");

test("increment 2 to equal 3", () => {
  expect(increment(2)).toBe(3);
});

test("decrement 2 to equal 1", () => {
  expect(decrement(2)).toBe(1);
});
