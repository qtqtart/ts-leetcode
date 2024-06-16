const romanToInt = (string: string) => {
  const map = new Map<string, number>([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let count = 0;

  for (let i = 0; i < string.length; i++) {
    const curr = map.get(string[i]) || 0;
    const next = map.get(string[i + 1]) || 0;

    if (next > curr) count -= curr;
    else count += curr;
  }

  return count;
};

export default romanToInt;
