import { sum } from "../components/sum";
// two arguments 1. Description 2. callback function
test("Sum function should calculate sum of two nubers", () => {
  const add = sum(3, 4);
  //Assertion
  expect(add).toBe(7);
});
