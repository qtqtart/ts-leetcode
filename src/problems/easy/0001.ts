const twoSum = (numbers: number[], target: number) => {
  const map = new Map<number, number>();

  for (let i = 0; i < numbers.length; i++) {
    const diff = target - numbers[i];

    if (map.has(diff)) return [map.get(diff), i];

    map.set(numbers[i], i);
  }

  return [];
};
