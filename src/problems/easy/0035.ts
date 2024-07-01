const searchInsert = (numbers: number[], target: number) =>
  [...numbers.filter((item) => item < target)].length;

export default searchInsert;
