const removeDuplicates = (numbers: number[]) =>
  numbers.splice(0, numbers.length, ...new Set(numbers)).length;

export default removeDuplicates;
