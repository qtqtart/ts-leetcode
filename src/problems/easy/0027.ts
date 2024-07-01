const removeElement = (numbers: number[], target: number) =>
  numbers.splice(
    0,
    numbers.length,
    ...numbers.filter((item) => item !== target),
  ).length;

export default removeElement;
