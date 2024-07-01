const merge = (
  numbers1: number[],
  number1: number,
  numbers2: number[],
  number2: number,
) => {
  numbers1.splice(number1, number2, ...numbers2);

  numbers1.sort((a, b) => a - b);
};

export default merge;
