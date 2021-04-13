const arrange = (numbers) => {
  const numbersWithoutZeros = numbers.filter((number) => number !== 0);
  const zeros = numbers.filter((number) => number === 0);
  const result = numbersWithoutZeros.concat(zeros);
  console.log(result);
  return result;
};

const addOneUnit = (numbers) => {
  const numbersWithoutZeros = numbers.filter((number) => number !== 0);
  const integerNumbers = Number(numbersWithoutZeros.join(""));
  const result = integerNumbers + 1;
  const resultInArray = Array.from(result + "", Number);
  console.log(resultInArray);
  return resultInArray;
};

module.exports = { arrange, addOneUnit };
