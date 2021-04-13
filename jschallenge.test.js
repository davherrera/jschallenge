const { arrange, addOneUnit } = require("./jschallenge");

describe("jschallenge", () => {
  test("should arrange all 0 to right ", () => {
    const numbers = [4, 8, 0, 9, 2, 5, 0, 3, 3, 0];
    const result = arrange(numbers);
    const expected = [4, 8, 9, 2, 5, 3, 3, 0, 0, 0];
    expect(expected).toEqual(result);
  });

  test("should add 1 to fictitious integer from array", () => {
    const numbers = [4, 8, 0, 9, 2, 5, 0, 3, 3, 0];
    const arrangeNumbers = arrange(numbers);

    const result = addOneUnit(arrangeNumbers);
    const expected = [4, 8, 9, 2, 5, 3, 4];

    expect(expected).toEqual(result);
  });

  test("should add 1 to fictitious integer from array when last number is 9", () => {
    const numbers = [1, 2, 3, 9];
    const arrangeNumbers = arrange(numbers);

    const result = addOneUnit(arrangeNumbers);
    const expected = [1, 2, 4, 0];

    expect(expected).toEqual(result);
  });

  test("should add 1 to fictitious integer from array when all number is 9", () => {
    const numbers = [9, 9, 9, 9];
    const arrangeNumbers = arrange(numbers);

    const result = addOneUnit(arrangeNumbers);
    const expected = [1, 0, 0, 0, 0];

    expect(expected).toEqual(result);
  });
});
